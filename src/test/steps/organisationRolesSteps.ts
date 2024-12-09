import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1)

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

Given('User clicks on Organisation roles tab', async function (){
    // const organisationMenu = await locators.pageFixtures.page.waitForSelector(locators.organisationRoleMenu, { timeout: 0 });
    // const organisationMenu = locators.pageFixtures.page.waitForSelector(locators.organisationRoleMenu);
    await locators.pageFixtures.page.waitForSelector(locators.organisationRoleMenu)
    await locators.pageFixtures.page.click(locators.organisationRoleMenu);
    await locators.pageFixtures.page.waitForTimeout(1500)
})

Then('User validates Organisation table is displayed', async function (){
     // Wait for the grid to appear
     await locators.pageFixtures.page.waitForSelector(locators.gridSelector);
 
     // Once the grid is visible, you can interact with it or extract data
     const gridVisible = await locators.pageFixtures.page.isVisible(locators.gridSelector);
     console.log(` Grid is visible: ${gridVisible}`);
     await locators.pageFixtures.page.waitForTimeout(5000);

     //Fields / Tables / Search Bar is displayed
    // const nameCell = await locators.pageFixtures.page.locator('div[data-column="name"]', { hasText: microsterRole }).first();
    await locators.pageFixtures.page.waitForSelector(locators.userIdColumn)
    await locators.pageFixtures.page.waitForSelector(locators.organisationRoleDescription)
    await locators.pageFixtures.page.waitForSelector(locators.nameColumn)

     // Example: Extract data from the grid
    // const gridData = await locators.pageFixtures.page.$$eval(`${gridSelector} .b-grid-row`, rows =>
    const gridData = await locators.pageFixtures.page.$$eval(`${locators.gridSelector} .b-grid-row`, (rows: any[]) =>
        rows.map(row => ({
            id: row.querySelector('[data-column="id"]')?.textContent?.trim(),
            name: row.querySelector('[data-column="name"]')?.textContent?.trim(),
            description: row.querySelector('[data-column="organisationRole.description"]')?.textContent?.trim(),
        }))
    );

    console.log(gridData);
    await locators.pageFixtures.page.waitForTimeout(2000)
})

Given('User clicks on Create Organisation Role', async function (){
    await locators.pageFixtures.page.click(locators.createOrganisationRoleButton);
    await locators.pageFixtures.page.waitForTimeout(1000);
})

Given('User clicks on Create button when enabled', async function (){
    // const createButton = locators.pageFixtures.page.locator('sp-button[variant="accent"][role="button"]');
    const createButton = locators.pageFixtures.page.getByRole('button', { name: 'Create' })
    const nameTextbox = locators.pageFixtures.page.locator('input.input[aria-label="Name"]');
    // Check if the button is enabled
    if (await createButton.isEnabled()) {
        await createButton.click();
        while (!(await nameTextbox.isDisabled())) {
            await locators.pageFixtures.page.waitForTimeout(100); // Wait for 100ms before rechecking
            console.log(' Name field is disabled');
            await locators.pageFixtures.page.waitForTimeout(2000);
          }
    } else {
        console.log('Create button is not enabled');
        throw new Error('Test failed: Create button was not enabled.');
    }
})

Given('User Search an existing Organisation Role {string}', async function (organisationRole){
    await locators.pageFixtures.page.waitForTimeout(3000);
    const searchField = locators.pageFixtures.page.locator(locators.searchField);
    await searchField.click();
    await searchField.fill(organisationRole);
})

Given('User validates Organisation Role is displayed in the grid {string}', async function (organisationRole){
    // Search for the "Test Admin" cell in the table using its text content
    const nameCell = await locators.pageFixtures.page.locator(locators.nameColumn, { hasText: organisationRole }).first();

  // Wait for the element to be visible (optional but recommended)
    await nameCell.waitFor({ state: 'visible' });
    console.log('Role is existing')
})

Given('the Duplicate Organisation Role dialog is displayed', async function(){
    // Locate the dialog using its unique heading or aria attributes
  const dialog = locators.pageFixtures.page.locator(locators.duplicateOrganistationDialog);
  // Wait for the dialog to appear and be visible
  await dialog.waitFor({ state: 'visible' });
  console.log('The Duplicate Organisation Role dialog appeared.');
})

Given('User clicks on Organisation Access tab', async function (){
    const organisationManagementTab = locators.pageFixtures.page.locator(locators.organisationAccessTab);
    // Wait for the tab to be visible and interactable
    await organisationManagementTab.waitFor({ state: 'visible' });
    // Click the tab
    await organisationManagementTab.click();
    await locators.pageFixtures.page.waitForTimeout(2000)
})

Given('User validates Organisation Access table,search,add button is displayed', async function (){
    await locators.pageFixtures.page.locator(locators.searchField);
    console.log(" Search Bar is displayed");
    await locators.pageFixtures.page.getByText('Add', { exact: true });
    console.log("Add Button is displayed");
})

Given('User clicks on Team Access tab', async function (){
    const reportManagementTab = locators.pageFixtures.page.locator(locators.teamAccessTab);
    // Wait for the tab to be visible and interactable
    await reportManagementTab.waitFor({ state: 'visible' });
  
    // Click the tab
    await reportManagementTab.click();
    await locators.pageFixtures.page.waitForTimeout(2000)
})

Given('User validates Team Access table,search,add button is displayed', async function (){
    await locators.pageFixtures.page.locator(locators.searchField);
    console.log(" Search Bar is displayed");
    await locators.pageFixtures.page.getByText('Add', { exact: true });
    console.log("Add Button is displayed");
})

Given('User clicks on Add button in Organisation or Team Access page', async function (){
    const addButton = await locators.pageFixtures.page.getByRole('button', { name: 'Add' });
    addButton.click();
    await locators.pageFixtures.page.waitForTimeout(2000)
})

Given('User validates sidebar is displayed', async function () {
    // Wait for the sidebar to be visible
    await locators.pageFixtures.page.getByLabel('Organisation Access').locator('#instanceId')
})

Given('User clicks on sidebar save button', async function (){
    const orgSaveBtn = locators.pageFixtures.page.getByLabel('Organisation Access').getByRole('button', { name: 'Save' })
    const teamSaveBtn = locators.pageFixtures.page.getByLabel('Team Access').getByText('Save')
    if (await orgSaveBtn.isVisible()){
        await orgSaveBtn.click()
    } else {
        await teamSaveBtn.click()
    }
    await locators.pageFixtures.page.waitForTimeout(1500)
})

Given('User selects a team in the dropdown list {string}', async function (team) {
    // Locate the dropdown button using its attributes and text content
    const dropdownButton = locators.pageFixtures.page.locator('sp-action-button[variant="primary"][role="button"]').filter({ hasText: 'Select' });

    // Wait for the dropdown button to be visible and click it
    await dropdownButton.waitFor({ state: 'visible', timeout: 5000 });
    await dropdownButton.click();
    const searchBtn = locators.pageFixtures.page.getByLabel('Team Access').locator('sp-popover').getByLabel('Search')
    await searchBtn.fill(team);
    await locators.pageFixtures.page.locator(`sp-menu-item[value="${team}"]`).click();
})