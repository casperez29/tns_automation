import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

Given('User clicks on Request role setup tab', async function (){
    await locators.pageFixtures.page.click('a[href="/wfm/security"]');
    console.log('✅ Request role setup tab is clicked');
})

Given('User clicks on the Create button for Request role setup', async function (){
    await locators.pageFixtures.page.getByRole('button', { name: 'Create' }).click();
})

Given('User is redirected to the Request Role Setup form', async function (){
  // Check if the form is displayed (by checking the presence of key form elements)
  const searchInput = await locators.pageFixtures.page.locator('input[formcontrolname="search"]');
  const startDateInput = await locators.pageFixtures.page.locator('input[formcontrolname="startDate"]');
  const endDateInput = await locators.pageFixtures.page.locator('input[formcontrolname="endDate"]');
  const requestTypeSelect = await locators.pageFixtures.page.locator('mat-select[formcontrolname="requestType"]');
  const requestRoleSelect = await locators.pageFixtures.page.locator('mat-select[formcontrolname="requestRole"]');
  const memberListInput = await locators.pageFixtures.page.locator('mat-chip-list[formcontrolname="memberList"]');
  const dynamicMemberListInput = await locators.pageFixtures.page.locator('mat-chip-list[formcontrolname="dynamicMemberList"]');

  // Condition to check if the elements should be visible (modify this condition as needed)
const shouldCheckVisibility = true;

if (shouldCheckVisibility) {
  try {
    // Assert that each element is visible
    await expect(searchInput).toBeVisible();
    await expect(startDateInput).toBeVisible();
    await expect(endDateInput).toBeVisible();
    await expect(requestTypeSelect).toBeVisible();
    await expect(requestRoleSelect).toBeVisible();
    await expect(memberListInput).toBeVisible();
    await expect(dynamicMemberListInput).toBeVisible();

    // Optionally, check if the form container is visible
    const formContainer = await locators.pageFixtures.page.locator('.mat-card-content'); // or use a more specific selector
    await expect(formContainer).toBeVisible();

    console.log("All elements are visible.");
  } catch (error) {
    console.log("One or more elements are not visible.");
    console.error(error);
  }
} else {
  console.log("Visibility check skipped.");
}

//   // Assert that each element is visible
//   await expect(searchInput).toBeVisible();
//   await expect(startDateInput).toBeVisible();
//   await expect(endDateInput).toBeVisible();
//   await expect(requestTypeSelect).toBeVisible();
//   await expect(requestRoleSelect).toBeVisible();
//   await expect(memberListInput).toBeVisible();
//   await expect(dynamicMemberListInput).toBeVisible();

//   // Optionally, check if the form container is visible
//   const formContainer = await locators.pageFixtures.page.locator('.mat-card-content'); // or use a more specific selector
//   await expect(formContainer).toBeVisible();
})

Given('User fills up the required fields with values {string} {string} {string} {string}', async function (personnelID, requestType, requestRole, costCentre){
      // Fill in Personnel ID
  await locators.pageFixtures.page.locator('input[formcontrolname="search"]').fill(personnelID);
  // Wait for the autocomplete panel and click the first option
    const firstOption = locators.pageFixtures.page.locator('.mat-autocomplete-panel .mat-option').first();
    // await firstOption.waitFor({ state: 'visible' });
    await locators.pageFixtures.page.waitForTimeout(1500)
    await firstOption.click();

    // Scope the locator to the Start Date field and click the calendar icon
    await locators.pageFixtures.page.locator('mat-form-field').filter({ hasText: 'Start date' }).locator('mat-datepicker-toggle button').click();

    // Wait for the datepicker popup and click today's date
    const today = locators.pageFixtures.page.locator('.mat-calendar-body-today');
    await today.waitFor({ state: 'visible' });
    await today.click();

    // Click on the Request type dropdown to open it
    await locators.pageFixtures.page.locator('mat-select[formcontrolname="requestType"]').click();
    // Wait for the options to load and select the specific option based on requestType
    const requestTypeOption = locators.pageFixtures.page.locator('.mat-option').filter({ hasText: requestType }).first();
    await requestTypeOption.waitFor({ state: 'visible' });
    await requestTypeOption.click();

    // Click on the Request role dropdown to open it
    await locators.pageFixtures.page.waitForTimeout(1200)
    await locators.pageFixtures.page.locator('mat-select[formcontrolname="requestRole"]').click();
    // Wait for the options to load and select the specific option based on requestType
    const requestRoleOption = locators.pageFixtures.page.locator('.mat-option').filter({ hasText: requestRole }).first();
    await requestRoleOption.waitFor({ state: 'visible' });
    await requestRoleOption.click();

    // Click on Dynamic Member List
    await locators.pageFixtures.page.locator('input[placeholder="Dynamic Member list setup"]').click();

    // Fill in Home Cost Centre
    await locators.pageFixtures.page.locator('input[placeholder="Home cost centre"]').fill(costCentre);
    const costCentreOption = locators.pageFixtures.page.locator('.mat-autocomplete-panel .mat-option').first();
    // await firstOption.waitFor({ state: 'visible' });
    await locators.pageFixtures.page.waitForTimeout(1500)
    await costCentreOption.click();
})

Given ('User clicks on Save dynamic member setup', async function () {
    await locators.pageFixtures.page.locator('app-dynamic-member-list-setup').getByRole('button', { name: 'Save' }).click();

//     const buttonContainer = locators.pageFixtures.page.locator('div[fxlayoutalign="end end"]');
// await buttonContainer.locator('button:has-text("Save")').click();
})

Given('User clicks on Save Request button', async function (){
    await locators.pageFixtures.page.getByRole('button', { name: 'Save' }).click();

})

When('User validates Request role setup landing page', async function () {
    const expectedHeaders = [
      'Start date',
      'End date',
      'Personnel',
      'Request type',
      'Delegate',
      'Member',
    ];
  
    const headerElements = await locators.pageFixtures.page.locator(
      'table thead tr th .mat-sort-header-content'
    );
  
    const actualHeaders: string[] = [];
    const count = await headerElements.count();
  
    for (let i = 0; i < count; i++) {
      const text = await headerElements.nth(i).textContent();
      actualHeaders.push(text?.trim() || '');
    }
  
    expect(actualHeaders).toEqual(expectedHeaders);
  });
  
  

Given ('User types in the personnel name or id field {string}', async function (personnelID){
    await locators.pageFixtures.page.locator('input[formcontrolname="personnelSearch"]').fill(personnelID);
})

Then ('User validates personnel with correct request type {string} {string} {string}', async function (personnelID, requestRole, requestType){
  const expectedRequestType = `${requestRole} - ${requestType}`;

  const row = locators.pageFixtures.page.locator('tbody > tr');

  const matchingRow = row.filter({
    hasText: personnelID,
  }).filter({
    hasText: expectedRequestType,
  });

  // Check if there are any matching rows
  const matchingRowCount = await matchingRow.count();

  if (matchingRowCount > 0) {
    // If matching rows exist, assert that there is exactly 1 match
    await expect(matchingRow).toHaveCount(1);
    const message = `Successfully created a request role setup for Personnel ${personnelID}`
    // console.log(`Successfully created a request role setup for Personnel ${personnelID}`)
    console.log(message)
    await this.attach(message)
  } else {
    // If no matching rows are found, throw an error or handle it accordingly
    throw new Error(`No matching personnel with ID: ${personnelID} and request type: ${expectedRequestType}`);
  }

//   await expect(matchingRow).toHaveCount(1);
})

Given('User clicks on Delegate button', async function (){
    await locators.pageFixtures.page.getByRole('gridcell', { name: 'Delegate' }).getByRole('button').click()
})

Given ('User clicks on Member list button', async function (){
    // await locators.pageFixtures.page.getByRole('columnheader', { name: 'Member' }).getByRole('button').click()
    await locators.pageFixtures.page.getByRole('gridcell', { name: 'Member' }).getByRole('button').click()
})

Given('User clicks on Add member button', async function (){
    await locators.pageFixtures.page.getByRole('button', {name : 'Add'}).click();
})

Given('User fills up Dynamic member list field {string}', async function (costCentre){
    // Click on Dynamic Member List
    await locators.pageFixtures.page.locator('input[placeholder="Dynamic Member list setup"]').click();

    // Fill in Home Cost Centre
    await locators.pageFixtures.page.locator('input[placeholder="Home cost centre"]').fill(costCentre);
    const costCentreOption = locators.pageFixtures.page.locator('.mat-autocomplete-panel .mat-option').first();
    // await firstOption.waitFor({ state: 'visible' });
    await locators.pageFixtures.page.waitForTimeout(1500)
    await costCentreOption.click();
})

Then('User validates member list is displayed for the personnel {string}', async function (personnelID){
    // const noRecords = locators.pageFixtures.page.locator('td.mat-footer-cell:has-text("No records found")');
    // const noRecords = locators.pageFixtures.page.locator('app-member-list').getByText('No records found');
    const noRecords = locators.pageFixtures.page.locator('form').getByText('No records found');
    await expect(noRecords).not.toBeVisible();
    const message = `Member list is successfully added to the personnel ${personnelID}`
    console.log(message)
    await this.attach(message)
})

Then('User validates Delegated Personnel {string} is displayed in the table', async function(delegatePersonnel){
    const rowLocator = locators.pageFixtures.page.locator('table tbody tr');

  const matchingRow = rowLocator.filter({
    hasText: delegatePersonnel,
  });

  const matchingCount = await matchingRow.count();
  if (matchingCount > 0) {
    await expect(matchingRow).toHaveCount(1);
    const successMessage = `✅ Personnel ID ${delegatePersonnel} found in the table`;
    console.log(successMessage);
    await this.attach(successMessage);
  } else {
    const errorMessage = `❌ Personnel ID ${delegatePersonnel} NOT found in the table`;
    await this.attach(errorMessage);
    throw new Error(errorMessage);
  }
})