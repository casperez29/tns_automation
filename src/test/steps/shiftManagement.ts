import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";


When('User clicks on the Shift management dropdown menu list', async function (){
    // Wait for the "Shift management" link to be visible after clicking the menu
    await locators.pageFixtures.page.waitForSelector('.navigation-link-title:text("Shift management")');

    // Click the "Shift management" link
    await locators.pageFixtures.page.locator('.navigation-link-title:text("Shift management")').click();

    console.log(' Successfully clicked on Shift management dropdown !');
})