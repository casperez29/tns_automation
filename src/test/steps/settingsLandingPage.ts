import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

When('User clicks on Settings menu', async function (){
    // Locate the settings icon by its text
  const settingsIcon = locators.pageFixtures.page.locator('mat-icon:has-text("settings")');
  
  // Ensure the icon is visible before clicking
  await expect(settingsIcon).toBeVisible();
  
  // Click the settings icon
  await settingsIcon.click();
});

When("User clicks on Settings {string} tab", async function (tab: string) {
    const tabs: Record<string, string> = {
      "Overtime Unavailability Settings": "/settings/overtimeunavailability",
      "Swap Shifts Settings": "/settings/swapshifts",
      "Allowances Settings": "/settings/manualallowances",
      "Employee Choices": "/settings/employeechoices",
      "Menu": "/settings/menu",
      "Work Area Roster": "/settings/workarearoster",
      "My Roster Settings": "/settings/myroster",
      "Roster Instruction Log Settings": "/settings/rosterinstructiondefinition",
      "Leave Settings": "/settings/leave",
      "Leave Accrual": "/settings/leaveaccrual",
      "Timesheets": "/settings/timesheets",
      "Personal Leave Calendar": "/settings/personalleavecalendar",
      "Overtime Decline": "/settings/overtimedecline",
      "Audit": "/settings/audit",
    };
  
    const tabUrl = tabs[tab];
  
    if (!tabUrl) {
      throw new Error(`❌ Invalid tab name: "${String(tab)}"`);
    }
  
    await locators.pageFixtures.page.waitForSelector(`a[href="${tabUrl}"]`, {
      state: "visible",
    });
  
    await locators.pageFixtures.page.click(`a[href="${tabUrl}"]`);
    console.log(`✅ ${String(tab)} tab is clicked`);
  });

Given('User clicks on Add filter button', async function (){
  await locators.pageFixtures.page.getByRole('button', { name: 'Add' }).click();
})

Given('User clicks on Apply to dropdown field', async function (){
  await locators.pageFixtures.page.getByRole('combobox', { name: 'Apply to' }).click();
})

Given("User selects option {string}", async function (option: string) {
  const options: Record<string, string> = {
    "Organisation Unit": "Organisation Unit",
    "Person": "Person",
    "Position Type": "Position Type",
  };

  const selectedOption = options[option];

  if (!selectedOption) {
    throw new Error(`❌ Invalid option: "${String(option)}"`);
  }

  await locators.pageFixtures.page.waitForSelector(`.mat-option-text`, { state: "visible" });
  await locators.pageFixtures.page.locator(`.mat-option-text`, { hasText: selectedOption }).click();

  console.log(`✅ Selected option: ${String(option)}`);
});

When('User inputs id {string} in Person field', async function (personId){
  await locators.pageFixtures.page.locator('//input[@placeholder="Person"]').fill(personId);
})

When('User inputs Cost Centre {string} in Organisation Unit field', async function (organisationUnit){
  await locators.pageFixtures.page.locator('//input[@placeholder="Organisation Unit"]').fill(organisationUnit);
})

Given('User selects the data in the dropdown list', async function() {
  await locators.pageFixtures.page.waitForSelector('.mat-option', { state: 'visible' });
  const options = await locators.pageFixtures.page.locator('.mat-option').all();
  if (options.length > 0) {
    await options[0].click(); // Clicks the first available option
  } else {
    throw new Error("❌ No options found in the dropdown.");
  }
})

Then('User clicks on Save filter button', async function (){
  await locators.pageFixtures.page.getByRole('button', { name: 'SAVE' }).click();
  await locators.pageFixtures.page.waitForTimeout(1000);
})


Then("User validates {string} settings landing page", async function (tab) {
    // Validate Add Button Exists
  const addButton = locators.pageFixtures.page.locator('button.mat-button:has-text("Add")');
  await expect(addButton).toBeVisible({
    timeout: 5000, // Optional: adjust timeout
  });
  console.log("✅ Add button is present and visible");

  // Validate Search Button Exists
  const searchBar = locators.pageFixtures.page.locator('input[matinput][formcontrolname="search"]');
  await expect(searchBar).toBeVisible({
    timeout: 5000, // Optional: adjust timeout
  });
  console.log("✅ Search bar is present and visible");
  });

Then('User validates Work Area Roster settings landing page', async function (){
    // Validate Add Button Exists
  const addButton = locators.pageFixtures.page.locator('button.mat-button:has-text("Add")');
  await expect(addButton).toBeVisible({
    timeout: 5000, // Optional: adjust timeout
  });
  console.log("✅ Add button is present and visible");

  // Validate Search Button Exists
  const searchBar = locators.pageFixtures.page.locator('input[matinput][formcontrolname="search"]');
  await expect(searchBar).toBeVisible({
    timeout: 5000, // Optional: adjust timeout
  });
  console.log("✅ Search bar is present and visible");
});

Then('User validates Menu settings landing page', async function (){
    // Validate Add Button Exists
  const addButton = locators.pageFixtures.page.locator('button.mat-button:has-text("Add")');
  await expect(addButton).toBeVisible({
    timeout: 5000, // Optional: adjust timeout
  });
  console.log("✅ Add button is present and visible");

  // Validate Search Button Exists
  const searchBar = locators.pageFixtures.page.locator('input[matinput][formcontrolname="search"]');
  await expect(searchBar).toBeVisible({
    timeout: 5000, // Optional: adjust timeout
  });
  console.log("✅ Search bar is present and visible");
});


Given('User clicks on Edit button for Person {string}', async function (person){
  // Define the dynamic ID
  const personId = person; // Change dynamically as needed

  // Locate the specific person's row
  const personRow = locators.pageFixtures.page.locator(
    `//span[text()="${personId}"]/ancestor::div[contains(@class, "mat-list-item-content")]`
  );

  // Ensure the row is visible and wait for it
  await personRow.waitFor({ state: "visible", timeout: 10000 });

  // Locate the edit button within the same row
  const editButton = personRow.locator(`button:has(mat-icon:text("edit"))`);

  // Scroll into view (in case it's hidden)
  await editButton.scrollIntoViewIfNeeded();

  // Ensure the button is visible and clickable
  await editButton.waitFor({ state: "visible", timeout: 10000 });

  // Click the edit button
  await editButton.click();
})

Given('User ticks the checkbox {string}', async function (colours: string){

  const label = colours; // Make this dynamic

  // Locate the checkbox dynamically
  const checkbox = locators.pageFixtures.page
    .locator(`.mat-list-item-content:has-text("${label}") mat-checkbox`)
    .first();
  const checkboxInput = checkbox.locator("input"); // Target the actual checkbox input element

  // Check if it's already checked
  const isChecked = await checkboxInput.isChecked();

  if (!isChecked) {
    await checkbox.click(); // Click to check it
  }

})