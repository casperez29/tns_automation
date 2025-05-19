import { When, Then, setDefaultTimeout, Given, World  } from "@cucumber/cucumber";
import { writeFileSync } from 'fs';

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";


When('User clicks on My roster tab', async function (){
    // Wait for the "My roster" link to be visible after clicking the menu
    await locators.pageFixtures.page.waitForSelector('.navigation-link-title:text("My roster")');

    // Click the "My roster" link
    await locators.pageFixtures.page.locator('.navigation-link-title:text("My roster")').first().click();

    console.log('Successfully clicked on My roster menu !');
    await locators.pageFixtures.page.waitForTimeout(4000)
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
  const topRightSettingsIcon = locators.pageFixtures.page.locator(`//mat-icon[text()="settings"]`).last();
await topRightSettingsIcon.click();

})

Then("the popup sidebar should be displayed", async function () {
  // Assert that the sidebar popup is visible
  const sidebar = locators.pageFixtures.page.locator(".mat-card"); // Adjust selector if needed
  await expect(sidebar).toBeVisible();
});

Then('User validates a roster is available for the current month', async function (){
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

Given('User selects colour option {string}', async function (colours: string){
  await locators.pageFixtures.page.locator('mat-form-field:has(mat-select[formcontrolname="selectedColourConfiguration"])').click();

  // Select the option dynamically based on the scenario value
  await locators.pageFixtures.page.locator(`mat-option >> text=${colours}`).click();
})

Given('User clicks on Ok button', async function (){
  await locators.pageFixtures.page.getByRole('button', { name: 'OK' }).click();
})


Given('User validates roster background color is {string}', async function (this: World, colorHex) {
  const calendarCell = await locators.pageFixtures.page.locator('.cal-cell-container > div:nth-child(3)').first();
  const inlineStyle = await calendarCell.getAttribute('style');

  console.log(`Inline CSS: ${inlineStyle}`);

  let bgColor = 'Not Found';

  if (inlineStyle) {
      const match = inlineStyle.match(/background-color:\s*([^;]+)/);
      bgColor = match ? match[1].trim() : 'Not Found';
      console.log(`Background Color: ${bgColor}`);
  }

  // Assert the color
  try {
      await expect(bgColor).toBe(colorHex);
      console.log(`✅ Background color is correct: ${bgColor}`);
  } catch (error) {
      console.log(`❌ Background color mismatch! Expected: ${colorHex}, Found: ${bgColor}`);
  }

  // Create JSON result
  const result = {
      expectedColor: colorHex,
      actualColor: bgColor,
      status: bgColor === colorHex ? 'Passed' : 'Failed',
      timestamp: new Date().toISOString(),
  };

  // Save JSON file
  const filePath = 'test-results.json';
  writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf-8');

  // ✅ Attach result to Cucumber Report
  this.attach(JSON.stringify(result, null, 2), 'application/json');
});

Given('User validates field property {string} is available and enabled', async function (property){
  // Define the option text dynamically
  const optionText = property; // Change this value to test different options

  // Locate the option dynamically using the variable
  const optionLocator = locators.pageFixtures.page.locator(`//mat-list-option[div/div[contains(text(), "${optionText}")]]`);
  const checkbox = optionLocator.locator('.mat-pseudo-checkbox');

  // Get the class attribute of the checkbox
  const isChecked = await checkbox.getAttribute('class');

  // Assert that the checkbox has the 'mat-pseudo-checkbox-checked' class
  expect(isChecked).toContain('mat-pseudo-checkbox-checked');
})

// Then("User validates Roster with current dates are displaying correct pattern {string}", async function (pattern) {
//   // Define the expected day number (make this dynamic if needed)
//   const expectedDay = "4"; // Change as required

//   // Normalize the pattern name to remove spaces if any exist
//   const formattedPattern = pattern.replace(/\s+/g, ''); // Example: "Vertical Lines" → "VerticalLines"

//   // Locate the roster cell that contains the expected day with the correct pattern
//   const rosterCell = locators.pageFixtures.page.locator(`.date-background.${formattedPattern}:has(.cal-day-number:text("${expectedDay}"))`);

//   // Ensure only one matching element exists
//   await expect(rosterCell).toHaveCount(1, { timeout: 5000 });

//   // Ensure the roster cell is visible
//   await expect(rosterCell).toBeVisible();

//   // Validate that it contains the correct day number
//   const actualDay = await rosterCell.locator('.cal-day-number').innerText();
//   expect(actualDay).toBe(expectedDay);

//   // Validate that it has the correct pattern class
//   const classList = await rosterCell.getAttribute('class');
//   expect(classList).toContain(formattedPattern);
//   console.log(`Pattern display is ${pattern}`);
// });
Then("User validates Roster with current dates are displaying correct pattern {string}", async function (pattern) {
  // Remove spaces from the pattern (e.g., "Front Diagonal" → "FrontDiagonal")
  const formattedPattern = pattern.replace(/\s+/g, '');

  // Get today's date dynamically
  const currentDate = new Date();
  const expectedDay = currentDate.getDate().toString(); // Gets the current day of the month

  // Locate all date-background cells
  const rosterCells = locators.pageFixtures.page.locator('.date-background');

  // Log the classes of all roster cells to find the pattern
  const cellCount = await rosterCells.count();
  for (let i = 0; i < cellCount; i++) {
    const cellText = await rosterCells.nth(i).textContent(); // Get the text of the cell
    const cellClasses = await rosterCells.nth(i).getAttribute('class'); // Get the class of the cell
    console.log(`Cell ${i} - Text: ${cellText} | Classes: ${cellClasses}`);
  }

  // Try filtering cells specifically for day 3
  const dayCells = rosterCells.filter({
    hasText: expectedDay, // Filter by day number (e.g., "3")
  });

  // Check for cells with the expected pattern
  const patternCells = dayCells.locator(`.${formattedPattern}`);

  // Count the matching cells
  const patternCellCount = await patternCells.count();
  if (patternCellCount === 0) {
    throw new Error(`No cells found for day ${expectedDay} with pattern ${pattern}`);
  } else if (patternCellCount > 1) {
    throw new Error(`Expected 1 cell for day ${expectedDay} with pattern ${pattern}, but found ${patternCellCount}`);
  }

  // Validate the pattern class
  const actualPattern = await patternCells.getAttribute('class');
  if (actualPattern && actualPattern.includes(formattedPattern)) {
    console.log(`Found expected pattern: ${formattedPattern}`);
  } else {
    throw new Error(`Pattern ${formattedPattern} not found in the class list: ${actualPattern}`);
  }
});

Given('User selects display style {string} on property {string}', async function (display, releaseSettings) {
  const fieldLocator = locators.pageFixtures.page.locator(`.mat-list-text:has-text("${releaseSettings}")`).locator('..');

  // Select the first dropdown (Pattern)
  const firstDropdown = fieldLocator.locator('mat-select[formcontrolname="lookupPicker"]');
  await firstDropdown.click();

  // Click the desired option based on releaseSettings
  await locators.pageFixtures.page.locator(`.mat-option:has-text("${display}")`).click(); 
});

Given('User selects line style {string} on property {string}', async function (pattern, releaseSettings) {
  // Locate the section using releaseSettings
  const fieldLocator = locators.pageFixtures.page.locator(`.mat-list-text:has-text("${releaseSettings}")`).locator('..');

  // Select the second dropdown (line style)
  const secondDropdown = fieldLocator.locator('mat-select[formcontrolname="patternValue"]');
  await secondDropdown.click();

  // Select the desired pattern option dynamically
  await locators.pageFixtures.page.locator(`.mat-option:has-text("${pattern}")`).click(); 
});
