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


