import { BeforeAll, AfterAll, Before, After, Status, AfterStep } from "@cucumber/cucumber";

import { Browser, BrowserContext, Page, chromium, defineConfig, ConsoleMessage, CDPSession } from "@playwright/test";
import { pageFixtures } from "./pageFixtures";

let browser: Browser;
let context: BrowserContext;

export default defineConfig({
    use: {
        // viewport: { width: 1920, height: 1080 },
        viewport: null,
        headless: false
    }
})

BeforeAll(async function () {
    browser = await chromium.launch({
        headless: false,
        args: [
            '--disable-dev-shm-usage', // optional: avoids shared memory issues
            '--window-position=1920,0' // Change this to the top-left corner of your second monitor
        ]
    });
})

Before(async function () {
    context = await browser.newContext({ ignoreHTTPSErrors: true, viewport: null });
    const page = await context.newPage();
    pageFixtures.page = page;
    await page.goto("https://tns.qa.cloud.apps.nm1.nm1.tambla.net/");

    // Use CDP to force the window to a position and size (like maximize)
    const cdpSession = await context.newCDPSession(page);
    const { windowId } = await cdpSession.send('Browser.getWindowForTarget');

    // Then, maximize the window
    await cdpSession.send('Browser.setWindowBounds', {
        windowId,
        bounds: {
            windowState: 'normal' // Maximize the window after adjusting size
        }
    });
    await page.goto("https://tns.qa.cloud.apps.nm1.nm1.tambla.net/");
});

After(async function ({ pickle, result }) {
    console.log(result?.status);
    //screenshots
    if (result?.status == Status.FAILED) {
        const img = await pageFixtures.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
        await this.attach(img, "image/png");
    }
    await pageFixtures.page.close();
    await context.close();

});

AfterStep(async function ({ pickle, result }) {
    const img = await pageFixtures.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png" })
    await this.attach(img, "image/png");
    await pageFixtures.page.waitForTimeout(1500)
});

AfterAll(async function () {
    await browser.close();
})