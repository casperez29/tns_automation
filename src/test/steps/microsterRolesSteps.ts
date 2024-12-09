import { When, Then, setDefaultTimeout, Given } from "@cucumber/cucumber";

setDefaultTimeout(60 * 5000 * 1);

import { expect } from "@playwright/test";
// import { pageFixtures, roleButton, microsterRoleMenu, gridSelector } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";

Given("User clicks on Roles tab in the sidebar", async function () {
  await locators.pageFixtures.page.waitForSelector(locators.roleButton, {
    timeout: 0,
  });
  // await locators.pageFixtures.page.click('sp-sidenav-item[label="Roles"]');
  await locators.pageFixtures.page.click(locators.roleButton);
});

Given("User clicks on Microster roles tab", async function () {
  await locators.pageFixtures.page.waitForSelector(
    locators.microsterRoleMenu,
    { timeout: 0 }
  );
  await locators.pageFixtures.page.click(locators.microsterRoleMenu);
});

Given("User validates Microster Roles table is displayed", async function () {
  // Wait for the grid to appear
  await locators.pageFixtures.page.waitForSelector(locators.gridSelector);

  // Once the grid is visible, you can interact with it or extract data
  const gridVisible = await locators.pageFixtures.page.isVisible(locators.gridSelector);
  console.log(` Grid is visible: ${gridVisible}`);

  //Fields / Tables / Search Bar is displayed
  await locators.pageFixtures.page.waitForSelector(locators.nameColumn);
  console.log("Name Column is displayed");
  await locators.pageFixtures.page.waitForSelector(locators.microsterDescriptionColumn);
  console.log("Description Column is displayed");
  await locators.pageFixtures.page.waitForSelector(locators.hierarchyLevelColumn);
  console.log("Hierarchy Level Column is displayed");
});

When("User clicks on Create Microster Role", async function () {
  await locators.pageFixtures.page.click(locators.createMicrosterButton);
  await locators.pageFixtures.page.waitForTimeout(1000);
});

Given("User inputs valid Name {string}", async function (name) {
  const nameField = locators.pageFixtures.page.locator(locators.nameField);
  await nameField.click();
  await nameField.fill(name);
});

Given("User types in description", async function () {
  const descriptionField = locators.pageFixtures.page.locator(locators.descriptionField);
  await descriptionField.click();
  await descriptionField.fill("test");
});

Given("User inputs Hierarchy Level {string}", async function (hierarchyLevel) {
  // Wait for the input field to be visible
  // const inputSelector = 'input.input[aria-label="Hierarchy Level"]';
  await locators.pageFixtures.page.waitForSelector(locators.hierarchyLevelField);

  // Input a value into the field
  await locators.pageFixtures.page.fill(locators.hierarchyLevelField, hierarchyLevel);
});

Then("User validates Microster error validation {string} {string}", async function (id, name) {
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
);

Then("User clicks on Microster Save button", async function () {
  // const saveButton = locators.pageFixtures.page.locator('sp-button:has-text("Save")');
  const saveButton = locators.pageFixtures.page.getByRole("button", { name: "Save" });
  await saveButton.click();
  await locators.pageFixtures.page.waitForTimeout(2000);
  const inputField = locators.pageFixtures.page.locator(locators.nameField);
  const isDisabled = await inputField.isDisabled();

  console.log(`Input field is disabled: ${isDisabled}`);
  expect(isDisabled).toBe(true);
  await locators.pageFixtures.page.waitForTimeout(2000);
});

Given("User Search an existing Role {string}", async function (existingRole) {
  const searchField = locators.pageFixtures.page.locator(locators.searchField);
  await searchField.click();
  await searchField.fill(existingRole);
});

Then(
  "User validates Microster Role is displayed in the grid {string}",
  async function (microsterRole) {
    // Search for the "Test Admin Role" cell in the table using its text content
    const nameCell = await locators.pageFixtures.page
      .locator(locators.nameColumn, { hasText: microsterRole })
      .first();

    // Wait for the element to be visible (optional but recommended)
    await nameCell.waitFor({ state: "visible" });
    console.log("Role is existing");
  }
);

Given("User clicks on {string} in the grid", async function (role) {
  const nameCell = await locators.pageFixtures.page
    .locator(locators.nameColumn, { hasText: role })
    .first();

  // Wait for the element to be visible (optional but recommended)
  await nameCell.waitFor({ state: "visible" });
  console.log("Role is existing");

  await nameCell.click();
});

Given("User double clicks on {string} in the grid", async function (role) {
  const nameCell = await locators.pageFixtures.page
    .locator(locators.nameColumn, { hasText: role })
    .first();

  // Wait for the element to be visible (optional but recommended)
  await nameCell.waitFor({ state: "visible" });
  console.log("Role is existing");

  await nameCell.dblclick()
  await locators.pageFixtures.page.waitForTimeout(1500);
});

When("User clicks on the duplicate button", async function () {
  // Locate the <sp-action-button> by text or tag
  const duplicateButton = locators.pageFixtures.page.locator(locators.duplicateButton);

  // Ensure the button is visible before clicking
  await duplicateButton.waitFor({ state: "visible" });

  // Perform the click action
  await duplicateButton.click();
});

Given("the Duplicate Microster Role dialog is displayed", async function () {
  // Locate the dialog using its unique heading or aria attributes
  const dialog = locators.pageFixtures.page.locator(locators.duplicateMicrosterDialog);

  // Wait for the dialog to appear and be visible
  await dialog.waitFor({ state: "visible" });

  console.log("The Duplicate Microster Role dialog appeared.");
});

Given("User inputs new role name {string}", async function (newRoleName) {
  // const textField = locators.pageFixtures.page.locator('sp-textfield >> input');
  const textField = locators.pageFixtures.page.getByRole("textbox").nth(3);

  // Wait for the input field to be visible and interactable
  await textField.waitFor({ state: "visible" });

  // Input the provided value into the field
  if (newRoleName == "Test") {
    await textField.fill(newRoleName);
    await locators.pageFixtures.page.waitForTimeout(1000);
    await textField.press("Control+A");
    await locators.pageFixtures.page.waitForTimeout(1000);
    await textField.press("Backspace");
  } else {
    await textField.fill(newRoleName);
    await locators.pageFixtures.page.waitForTimeout(1000);
    await textField.press("Enter");
  }
});

Given("User clicks on the Duplicate button when enabled", async function () {
  // Locate the <sp-button> element
  const duplicateButton = locators.pageFixtures.page.locator('sp-button[variant="accent"]');

  // Wait until the button is enabled (i.e., the 'disabled' attribute is removed)
  await duplicateButton.waitFor({
    state: "attached",
    timeout: 10000, // Wait for a max of 10 seconds
  });

  // Click the button once enabled
  await duplicateButton.click();
});

Given("the error validation is displayed {string}", async function (error) {
  const errorMessagesLocator = locators.pageFixtures.page.locator(locators.errorMessage);

  const expectedMessages = [error];
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

  await locators.pageFixtures.page.waitForTimeout(3000);
});

Then("User validates {string} displayed in the grid", async function (newRoleName) {
    const searchField = locators.pageFixtures.page.locator(locators.searchField);
    await searchField.click();
    await searchField.fill(newRoleName);

    // Search for the "Test Admin" cell in the table using its text content
    const nameCell = await locators.pageFixtures.page
      .locator(locators.nameColumn, { hasText: newRoleName })
      .first();

    // Wait for the element to be visible (optional but recommended)
    await nameCell.waitFor({ state: "visible" });
    await locators.pageFixtures.page.waitForTimeout(2000)
    console.log(" Duplicate Role is existing");
  }
);

Given("User clicks on the Delete button", async function () {
  const deleteButton = locators.pageFixtures.page.locator(locators.deleteButton);
  await deleteButton.waitFor({ state: "visible" });
  await deleteButton.click();
});

Given("the Delete {string} dialog is displayed", async function (role) {
  // Locate the dialog using its unique heading or aria attributes
  const dialog = locators.pageFixtures.page.locator(
    `sp-alert-dialog h2:has-text("${role}")`
  );

  // Wait for the dialog to appear and be visible
  await dialog.waitFor({ state: "visible" });

  console.log(" The Delete Form dialog appeared.");
  await locators.pageFixtures.page.waitForTimeout(3000);
});

Then("User clicks on the Delete button when enabled", async function () {
  // await locators.pageFixtures.page.click('sp-button:has-text("Delete")');
  const deleteBtn = locators.pageFixtures.page.locator('sp-button[variant="negative"]');
  await deleteBtn.waitFor({
    state: "visible",
    timeout: 10000, // Wait for a max of 10 seconds
  });
  await deleteBtn.click();
  await locators.pageFixtures.page.waitForTimeout(5000);
  console.log(" Delete button clicked");
});

Given('User clicks on User Management tab', async function (){
  const userManagementTab = locators.pageFixtures.page.locator(locators.userManagementTab);
  // Wait for the tab to be visible and interactable
  await userManagementTab.waitFor({ state: 'visible' });

  // Click the tab
  await userManagementTab.click();
})

Given('User clicks on Security Profiles tab', async function (){
  const securityProfileTab = locators.pageFixtures.page.locator(locators.securityProfileTab);
  // Wait for the tab to be visible and interactable
  await securityProfileTab.waitFor({ state: 'visible' });

  // Click the tab
  await securityProfileTab.click();
  await locators.pageFixtures.page.waitForTimeout(2000)
})

Given("User validates User Management table,search,add button is displayed", async function () {
    // Wait for the grid to appear
    // const gridSelector = 'div[class="b-grid-panel-body"]';
    // await locators.pageFixtures.page.waitForSelector(gridSelector);

    // // Once the grid is visible, you can interact with it or extract data
    // const gridVisible = await locators.pageFixtures.page.isVisible(gridSelector);
    // console.log(` Grid is visible: ${gridVisible}`);

    //Fields / Tables / Search Bar is displayed
    // await locators.pageFixtures.page.waitForSelector('div[data-column="userId"]');
    // console.log("User Id Column is displayed");
    // await locators.pageFixtures.page.waitForSelector('div[data-column="microsterRole"]');
    // console.log("Microster Role Column is displayed");
    // await locators.pageFixtures.page.waitForSelector('div[data-column="organisationRole"]');
    // console.log("Organisation Role Column is displayed");
    // await locators.pageFixtures.page.waitForSelector('div[data-column="reportingRole"]');
    // console.log("Reporting Role Column is displayed");
    // await locators.pageFixtures.page.waitForSelector('div[data-column="personnelId"]');
    // console.log("Personnel Id Column is displayed");
    // await locators.pageFixtures.page.waitForSelector('div[data-column="inactive"]');
    // console.log("Active/Inactive Column is displayed");

    await locators.pageFixtures.page.locator(locators.searchField);
    console.log(" Search Bar is displayed");


    await locators.pageFixtures.page.getByText('Add', { exact: true });
    console.log("Add Button is displayed");
  }
);

Given('User validates all sections are displayed', async function (){
  const workbenchSection = locators.pageFixtures.page.locator('sp-table').filter({
    has: locators.pageFixtures.page.locator('sp-table-cell', { hasText: 'Filters' }),
  });
  const worklistSection = locators.pageFixtures.page.locator('sp-table').filter({
    has: locators.pageFixtures.page.locator('sp-table-cell', { hasText: 'Worklist' }),
  });
  const awardsSection = locators.pageFixtures.page.locator('sp-table').filter({
    has: locators.pageFixtures.page.locator('sp-table-cell', { hasText: 'Costs' }),
  });
  const rolesSection = locators.pageFixtures.page.locator('sp-table').filter({
    has: locators.pageFixtures.page.locator('sp-table-cell', { hasText: 'Microster Role' }),
  });
  await workbenchSection.waitFor({ state: 'visible' });
  await awardsSection.waitFor({ state: 'visible' });
  await worklistSection.waitFor({ state: 'visible' });
  await rolesSection.waitFor({ state: 'visible' });
  console.log('Workbench Section is displayed')
  console.log('Worklist Section is displayed')
  console.log('Awards Interpretation Section is displayed')
  console.log('Roles Section is displayed')
})

Given('User clicks on Add button', async function (){
  const addButton = await locators.pageFixtures.page.getByText('Add', { exact: true });
  addButton.click();
})

Given('the Add User to Microster Role dialog appears', async function (){
  await locators.pageFixtures.page.waitForSelector('h2:has-text("Add Users to Microster Role")', { state: 'visible' });
  console.log('The Add Users to Microster Role dialog appeared.');
  await locators.pageFixtures.page.waitForTimeout(1000);
})

Given('User Search an existing User to add to Microster Role {string}', async function (user){
  const searchField = await locators.pageFixtures.page.getByLabel('Add Users to Microster Role').getByPlaceholder('Search');
  await searchField.click();
  await searchField.fill(user);
})

Given('User clicks on existing User {string} in the grid', async function (user){
  const nameCell = await locators.pageFixtures.page.locator(locators.userId, { hasText: user }).first();

  // Wait for the element to be visible (optional but recommended)
  await nameCell.waitFor({ state: 'visible' });
  console.log(' Existing User clicked')

  await nameCell.click();
})

Given('User clicks on Add Users to Microster Save button', async function (){
  // locator('t-page-header').getByRole('button', { name: 'Save' })
  const saveBtn = locators.pageFixtures.page.locator(locators.microsterSaveButton);
  await saveBtn.click();
  await locators.pageFixtures.page.waitForTimeout(1500);
  console.log('Save button clicked');
})

Given('User clicks on Microster Role dropdown', async function (){
  await locators.pageFixtures.page.locator('button#button[aria-haspopup="true"]').nth(3).click();
  await locators.pageFixtures.page.waitForTimeout(1000)
})

Given('User selects ReadWrite option', async function (){
  const option = locators.pageFixtures.page.getByRole('option', { name: 'ReadWrite' })
  await option.click();
  await locators.pageFixtures.page.waitForTimeout(3000);
})