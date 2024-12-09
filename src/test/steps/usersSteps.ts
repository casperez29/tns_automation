import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 1)

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

Given('User clicks on Users tab in the sidebar', async function () {
    await locators.pageFixtures.page.waitForSelector(locators.userTab, { timeout: 0 });
    await locators.pageFixtures.page.click(locators.userTab);
    await locators.pageFixtures.page.waitForTimeout(3000)
});

When('User validates User table is displayed', async function () {
    const userTable = locators.pageFixtures.page.locator(locators.userTable);
    await expect(userTable).toBeVisible();
});

Then('User clicks on Create button', async function () {
    await locators.pageFixtures.page.click(locators.userCreateButton);
    await locators.pageFixtures.page.waitForTimeout(1000);
});

Given('User inputs valid user id {string}', async function (userId) {
    await locators.pageFixtures.page.locator(locators.userIdField).type(userId);
    await locators.pageFixtures.page.waitForTimeout(1000);
})

Given('User ticks Active checkbox', async function (){
    await locators.pageFixtures.page.click(locators.activeCheckbox);
    const isChecked = await locators.pageFixtures.page.isChecked(locators.activeCheckbox);
    console.log('Checkbox checked:', isChecked); 
})

Given('User selects a Microster Role {string}', async function (microsterRole) {
    const dropBtn = locators.pageFixtures.page.locator('overlay-trigger').filter({ hasText: 'Select Reset the filter to its original settings 100-RA 100-REP 100-SCM 100-TA' }).getByRole('button')
    await dropBtn.click();

    const searchBtn = locators.pageFixtures.page.getByRole('searchbox', { name: 'Search' });
    await searchBtn.fill(microsterRole);
    await locators.pageFixtures.page.locator(`sp-menu-item[value="${microsterRole}"]`).click();
    await locators.pageFixtures.page.waitForTimeout(1000);
})


Given('User selects an Organisational Role {string}', async function (organisationalRole) {
    const orgBtn = locators.pageFixtures.page.locator('overlay-trigger').filter({ hasText: 'Select Reset the filter to its original settings 100-WFM 100-WFM_Duplic ALL' }).getByRole('button')
    await orgBtn.click();
    const searchBtn = locators.pageFixtures.page.getByRole('searchbox', { name: 'Search' });
    await searchBtn.fill(organisationalRole);
    await locators.pageFixtures.page.locator(`sp-menu-item[value="${organisationalRole}"]`).click();
})

Given('User inputs valid email: {string}', async function (emailAddress) {
    await locators.pageFixtures.page.locator(locators.emailAddressField).type(emailAddress);
    await locators.pageFixtures.page.waitForTimeout(1000);
})

When('Save button is enabled', async function (){
    // const saveButton = locators.pageFixtures.page.locator('sp-button:has-text("Save")');
    const saveButton = locators.pageFixtures.page.getByRole('button', { name: 'Save' });
    const isEnabled = await saveButton.isEnabled();
    console.log(`Save button is enabled: ${isEnabled}`);
})

Then('User clicks on Save button', async function (){
    const saveButton = locators.pageFixtures.page.locator(locators.userCreateSaveButton);
    await saveButton.click();
    await locators.pageFixtures.page.waitForTimeout(2000);
    const inputField = locators.pageFixtures.page.locator(locators.userIdField);
    const isDisabled = await inputField.isDisabled();

    console.log(`Input field is disabled: ${isDisabled}`);
    expect(isDisabled).toBe(true);
    await locators.pageFixtures.page.waitForTimeout(2000);
})

Given('User inputs valid Contact Number', async function (){
    const contactNumberField = locators.pageFixtures.page.locator(locators.contactField);

    await contactNumberField.click();

    await contactNumberField.fill('1234567890');
})

Given('User validates error validation {string} {string} {string} {string}', async function (userId, microsterRole, organisationalRole, emailAddress){
    const errorMessagesLocator = locators.pageFixtures.page.locator('sp-help-text[slot="negative-help-text"] .validation-message');
    const expectedMessages = [userId, microsterRole, organisationalRole, emailAddress];
    // Validate each error message
    for (let i = 0; i < expectedMessages.length; i++) {
        const messageText = await errorMessagesLocator.nth(i).innerText();
        console.log(`Validating message: ${messageText}`);

        // Assertion to check if the actual message matches the expected message
        if (messageText !== expectedMessages[i]) {
            console.error(`Error: Expected "${expectedMessages[i]}" but found "${messageText}"`);
            throw new Error(`Validation failed for message: Expected "${expectedMessages[i]}" but found "${messageText}"`);
        }
    }
})

Given('User Search an existing User {string}', async function (user){
    const searchField = locators.pageFixtures.page.locator(locators.searchField);
    await searchField.click();
    await searchField.fill(user);
})

Then('User validates User is displayed in the grid {string}', async function (user){
    // Search for the "casiusp29" cell in the table using its text content
    const nameCell = await locators.pageFixtures.page.locator(locators.userIdColumn, { hasText: user }).first();

    // Wait for the element to be visible (optional but recommended)
    await nameCell.waitFor({ state: 'visible' });
    console.log(' User is existing')
})

Given('User clicks on User {string} in the grid', async function (user){
    const nameCell = await locators.pageFixtures.page.locator(locators.userIdColumn, { hasText: user }).first();

    // Wait for the element to be visible (optional but recommended)
    await nameCell.waitFor({ state: 'visible' });
    console.log(' Existing User clicked')

    await nameCell.click();
})

Given('User inputs data {string} in the page size field', async function (pageSize){
    const pageSizeField = locators.pageFixtures.page.locator('[name="b-numberfield-2"]');
    await locators.pageFixtures.page.waitForSelector('[name="b-numberfield-2"]', { state: 'visible' });
    await locators.pageFixtures.page.click('[name="b-numberfield-2"]');
    await locators.pageFixtures.page.locator('[name="b-numberfield-2"]').fill(pageSize);
    await pageSizeField.press("Enter");

    console.log(` Entered value: ${pageSize}`);
    await locators.pageFixtures.page.waitForTimeout(5000)
})

Then('User validates table displays desired number of data {string}', async function (pageSize){
    await locators.pageFixtures.page.waitForSelector('.b-grid-row');
    const tableRow = pageSize;

    // Count the rows
    const rowCount = await locators.pageFixtures.page.$$eval(
        '.b-grid-row',
        (rows: any[]) => rows.length
      );
      if (rowCount != tableRow) {
        // Fail the test if row count does not match
        throw new Error(`Test failed: Expected ${tableRow} rows, but found ${rowCount} rows.`);
    } else {
        console.log(` Number of rows: ${rowCount}`);
    }
    await locators.pageFixtures.page.waitForTimeout(3000)  
})

Given('User inputs page number {string} in the page number field', async function (pageNumber){
    const pageNumberField = locators.pageFixtures.page.locator('[name="b-numberfield-1"]');
    await locators.pageFixtures.page.waitForSelector('[name="b-numberfield-1"]', { state: 'visible' });
    await locators.pageFixtures.page.click('[name="b-numberfield-1"]');
    await locators.pageFixtures.page.locator('[name="b-numberfield-1"]').fill(pageNumber);
    await pageNumberField.press("Enter");

    console.log(` Entered value: ${pageNumber}`);
    await locators.pageFixtures.page.waitForTimeout(3000)
})

Then('User validates table displays the correct page data {string}', async function (rowData){
    // const cellData = locators.pageFixtures.page.locator('div.b-grid-cell[data-column="id"][data-column-id="id46"]');
    // const cellData = locators.pageFixtures.page.locator(locators.userIdColumn)
    // const cellData = locators.pageFixtures.page.getByLabel('User Id column. SPACE for')
    const cellData = locators.pageFixtures.page.locator('[data-column-id="id46"]');

    // Get the text content of the cell
    const cellText = await cellData.textContent();

    // Log the text or use it as needed
    console.log('Cell text:', cellText);

    // Optionally, you can add assertions
    // expect(cellText).toBe('A AbdelMessieh');
    if (cellText !== rowData){
        console.log(` Data displayed for page: with first User ID: ${cellText}`)
    } else {
        throw new Error('Test Failed: Table did not navigate to desired page data.')
    }
})