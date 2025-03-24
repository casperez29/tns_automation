import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

Then('User should be navigated to the My workspace dashboard by default', async function (){
  await locators.pageFixtures.page.waitForTimeout(2000)
  // Wait for the dashboard container to be visible
  await expect(locators.pageFixtures.page.locator('div[fxlayout="column"]')).toBeVisible();
})

Given('User clicks on the navigation menu', async function (){
    // Click the menu button using the mat-icon text
    await locators.pageFixtures.page.locator('mat-icon:has-text("menu")').click();

    // Alternatively, using the button class
    // await page.locator('button[mat-icon-button]').click();

    console.log('Menu button clicked successfully!');
})

When('User clicks on My workspace tab', async function (){
     // Wait for the "My workspace" link to be visible after clicking the menu
     await locators.pageFixtures.page.waitForSelector('.navigation-link-title:text("My workspace")');

     // Click the "My workspace" link
     await locators.pageFixtures.page.locator('.navigation-link-title:text("My workspace")').click();
 
     console.log('Successfully clicked on My Workspace!');
})

When("User clicks on {string} workspace tab", async function (tab: string) {
    // Define tab selectors
    const tabs: { [key: string]: string } = {
      "My Requests": 'div[role="tab"]:has-text("My requests")',
      "My Team Requests": 'div[role="tab"]:has-text("My team requests")',
      "My Approvals": 'div[role="tab"]:has-text("My approvals")',
    };
  
    // Get the selector for the requested tab
    const tabSelector = tabs[tab];
  
    // Validate if tab exists in our mapping
    if (!tabSelector) {
      throw new Error(`❌ Invalid tab name: "${tab}"`);
    }
  
    // Wait for the tab to be visible before clicking
    await locators.pageFixtures.page.waitForSelector(tabSelector, {
      state: "visible",
    });
  
    // Click the tab
    await locators.pageFixtures.page.click(tabSelector);
    console.log(`✅ ${tab} tab clicked`);
  });
  

// When('User clicks on {string} workspace tab', async function (workspace){
//     if (workspace == "My Request"){
//         await locators.pageFixtures.page.click()
//     }
//     else if (workspace == "My Team Request"){

//     }
//     else if (workspace == "My Approvals"){

//     }
// });

Then('User redirects to the My Workspace dashboard', async function (){
    // Wait for the "My requests" tab to be visible
    const myRequestsTab = locators.pageFixtures.page.locator('.mat-tab-label:has-text("My requests")');

    // Ensure the tab is visible before assertion
    await expect(myRequestsTab).toBeVisible();

    // Assert that the "My requests" tab is selected
    await expect(myRequestsTab).toHaveAttribute('aria-selected', 'true');

    console.log('My Requests tab is successfully selected!');
})