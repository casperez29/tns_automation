import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1)

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

Given('User clicks on Report roles tab', async function (){
    await locators.pageFixtures.page.waitForSelector('a[href="/microster/roles/report"]', { timeout: 0 });
    await locators.pageFixtures.page.click('a[href="/microster/roles/report"]');
})

Then('User validates Report Roles table is displayed', async function (){
     // Wait for the grid to appear
    //  const gridSelector = 'div[class="b-grid-panel-body"]';
     await locators.pageFixtures.page.waitForSelector(locators.gridSelector);
 
     // Once the grid is visible, you can interact with it or extract data
    const gridVisible = await locators.pageFixtures.page.isVisible(locators.gridSelector);
    console.log(` Grid is visible: ${gridVisible}`);

    await locators.pageFixtures.page.waitForSelector(locators.nameColumn)
    console.log('Name Column is displayed')
    await locators.pageFixtures.page.waitForSelector(locators.reportDescriptionColumn)
    console.log('Description Column is displayed')
})

Given('User clicks on Create Report Role', async function (){
    await locators.pageFixtures.page.click(locators.createReportButton);
    await locators.pageFixtures.page.waitForTimeout(1000);

})

Given('User inputs valid name {string}', async function (name){
    await locators.pageFixtures.page.locator(locators.nameField).type(name);
    await locators.pageFixtures.page.waitForTimeout(1000);
})

Given('User inputs valid description {string}', async function (description) {
    await locators.pageFixtures.page.locator(locators.descriptionField).type(description);
    await locators.pageFixtures.page.waitForTimeout(1000);
})

Given('User ticks is Administrator checkbox', async function (){
    await locators.pageFixtures.page.click(locators.activeCheckbox);
    const isChecked = await locators.pageFixtures.page.isChecked(locators.activeCheckbox);
    console.log('Checkbox checked:', isChecked); 
})

Given('User clicks on Reports Save button', async function (){
    // const saveButton = locators.pageFixtures.page.locator('sp-button:has-text("Save")');
    const saveButton = locators.pageFixtures.page.getByRole('button', { name: 'Save' });
    await saveButton.click();
    await locators.pageFixtures.page.waitForTimeout(5000);
})

Given('User Search an existing Report Role {string}', async function (reportRole){
    const searchField = locators.pageFixtures.page.locator(locators.searchField);
    await searchField.click();
    await searchField.fill(reportRole);
})

Given('User validates Report Role is displayed in the grid {string}', async function (organisationRole){
    // Search for the "Test Admin" cell in the table using its text content
    const nameCell = await locators.pageFixtures.page.locator(locators.nameColumn, { hasText: organisationRole }).first();

  // Wait for the element to be visible (optional but recommended)
    await nameCell.waitFor({ state: 'visible' });
    console.log('Role is existing')
})

Given('the Duplicate Report Role dialog is displayed', async function(){
    await locators.pageFixtures.page.waitForSelector(locators.reportDialog, { state: 'visible' });
    console.log('The Duplicate Report Role dialog appeared.');
})

Given('User clicks on Report Management tab', async function (){
    const reportManagementTab = locators.pageFixtures.page.locator(locators.reportManagementTab);
    // Wait for the tab to be visible and interactable
    await reportManagementTab.waitFor({ state: 'visible' });
  
    // Click the tab
    await reportManagementTab.click();
    await locators.pageFixtures.page.waitForTimeout(2000)
})

Given('User validates Report Management table,search,add button is displayed', async function (){
    await locators.pageFixtures.page.locator(locators.searchField);
    console.log(" Search Bar is displayed");
    await locators.pageFixtures.page.getByText('Add', { exact: true });
    console.log("Add Button is displayed");
})

Then("User validates Report Role error validation {string} {string}", async function (id, name) {
    const errorMessagesLocator = locators.pageFixtures.page.locator( 'sp-help-text[slot="negative-help-text"] .validation-message');

    const expectedMessages = [id, name];
    for (const message of expectedMessages) {
      const locator = locators.pageFixtures.page.locator(
        `sp-help-text:has-text("${message}")`
      );

      if (await locator.isVisible()) {
        console.log(`Validation passed: Found "${message}"`);
      } else {
        throw new Error(`Validation failed: "${message}" not found`);
      }
    }
  }
)

Then('User clicks on Cancel button', async function (){
    await locators.pageFixtures.page.waitForTimeout(1000);
    await locators.pageFixtures.page.locator(locators.cancelButton).click();
})