import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";


When('User clicks on My roster tab', async function (){
    // Wait for the "My roster" link to be visible after clicking the menu
    await locators.pageFixtures.page.waitForSelector('.navigation-link-title:text("My roster")');

    // Click the "My roster" link
    await locators.pageFixtures.page.locator('.navigation-link-title:text("My roster")').click();

    console.log('Successfully clicked on My roster !');
})

Then('User validates current calendar roster is displayed', async function (){
    // Locate the calendar header section
  const calendarHeader = locators.pageFixtures.page.locator('mwl-calendar-month-view-header');

  // Assert that the calendar header is visible
  await expect(calendarHeader).toBeVisible();
  console.log("Roster Calendar is displayed")

  // Optionally, verify that the expected weekdays are present
  const expectedDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  for (const day of expectedDays) {
    await expect(calendarHeader.locator(`text=${day}`)).toBeVisible();
    console.log("Calendar days are properly displayed.")
  }
})

When('User clicks on the Settings gear icon', async function (){
    // Locate the settings icon by its text
  const settingsIcon = locators.pageFixtures.page.locator('mat-icon:has-text("settings")');

  // Ensure the icon is visible before clicking
  await expect(settingsIcon).toBeVisible();

  // Click the settings icon
  await settingsIcon.click();
})

Then("the popup sidebar should be displayed", async function () {
  // Assert that the sidebar popup is visible
  const sidebar = locators.pageFixtures.page.locator(".mat-card"); // Adjust selector if needed
  await expect(sidebar).toBeVisible();
});

Then('User validates a roster is available for the current month', async function (){

    // const calendarDays = await locators.pageFixtures.page.locator(
    //   ".cal-cell-container"
    // );

    // // Loop through each calendar day and check for a roster inside
    // for (const day of await calendarDays.elementHandles()) {
    //   const roster = await day.$('div:has-text(":")'); // Checks for a time range
    //   if (roster) {
    //     console.log("✅ Roster found in this calendar day.");
    //   } else {
    //     console.log("❌ No roster found in this calendar day.");
    //   }
    // }
    // Locate the calendar month element and get the text (e.g., "January 2025")
// const monthElement = await locators.pageFixtures.page.locator('span.mat-title.ng-star-inserted');
const monthElement = await locators.pageFixtures.page.getByText(/^[A-Za-z]+ \d{4}$/, { exact: true });
await monthElement.waitFor({ state: 'visible', timeout: 5000 }); // Ensure it's loaded
const calendarMonth = await monthElement.innerText();

// Locate all calendar day elements
const calendarDays = await locators.pageFixtures.page.locator('.cal-cell-container');

// Loop through each calendar day and check for a roster inside
for (const day of await calendarDays.elementHandles()) {
    // Extract the day number (e.g., "1", "2", etc.)
    const dayNumberElement = await day.$('.cal-day-number');
    const dayNumber = dayNumberElement ? await dayNumberElement.innerText() : 'Unknown';

    // Check if a roster is inside this day
    const roster = await day.$('div:has-text(":")'); // Checking for time format like "08:30 - 17:00"
    if (roster) {
        console.log(`✅ ${calendarMonth} ${dayNumber}: Roster found.`);
    } else {
        console.log(`❌ ${calendarMonth} ${dayNumber}: No roster found.`);
    }
}
})

Given('User clicks on the calendar previous button', async function (){
  // Locate the back button using the "chevron_left" icon and click it
await locators.pageFixtures.page.locator('button[mat-icon-button][mwlcalendarpreviousview]').click();

console.log("✅ Clicked on the back button in the calendar navigation.");
await locators.pageFixtures.page.waitForTimeout(2000)
})