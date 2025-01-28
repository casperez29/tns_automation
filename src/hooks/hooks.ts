import { BeforeAll, AfterAll, Before, After, Status, AfterStep} from "@cucumber/cucumber";

import { Browser, BrowserContext, Page, chromium, defineConfig } from "@playwright/test";
import { pageFixtures } from "./pageFixtures";

let browser: Browser;
let context: BrowserContext;

export default defineConfig({
    use: {
        viewport: { width: 1366, height: 768 }
    }
})

BeforeAll(async function(){
    browser = await chromium.launch({headless:false});
})

Before(async function () {
    context = await browser.newContext({ignoreHTTPSErrors:true});
    const page = await context.newPage();
    pageFixtures.page = page;
    await page.goto("https://tns.qa.cloud.apps.nm1.nm1.tambla.net/");
});

After(async function({pickle, result}){
    console.log(result?.status);
    //screenshots
    if(result?.status == Status.FAILED){
        const img = await pageFixtures.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
        await this.attach(img, "image/png");
    }
    await pageFixtures.page.close();
    await context.close();

});

AfterStep( async function ({ pickle, result}) {
    const img = await pageFixtures.page.screenshot({ path: `./test-results/screenshots/${pickle.name}.png`, type: "png"})
    await this.attach(img, "image/png");
    await pageFixtures.page.waitForTimeout(1500)
});

AfterAll(async function (){
    await browser.close();
})