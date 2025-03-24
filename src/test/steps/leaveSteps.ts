import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

When('User clicks on Leave dropdown tab', async function (){
    // Wait for the "Shift management" link to be visible after clicking the menu
    await locators.pageFixtures.page.waitForSelector('.navigation-link-title:text("Leave")');

    // Click the "Shift management" link
    await locators.pageFixtures.page.locator('.navigation-link-title:text("Leave")').click();

    console.log(' Successfully clicked on Shift management dropdown !');
})

Given('User clicks on Leave tab', async function (){
    await locators.pageFixtures.page.click('a[href="/wfm/leave"]');
    console.log('✅ Leave tab is clicked');
})