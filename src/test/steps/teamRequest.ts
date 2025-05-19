import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

Given('the search Person pop-up dialog box is displayed', async function (){
    await locators.pageFixtures.page.locator('mat-dialog-container:has(mat-dialog-title:text("Person"))');
    console.log("Person dialog box displayed")
})

When('User inputs a value in the search member field {string}', async function (personnelID){
    await locators.pageFixtures.page.locator('input[placeholder="Search member"]').fill(personnelID);
})

Given('User clicks on the Personnel ID {string}', async function (personnelID){
    await locators.pageFixtures.page.locator('tr.mat-row').filter({
        hasText: personnelID
      }).first().click();
})