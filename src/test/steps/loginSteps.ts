import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";


setDefaultTimeout(60 * 1000 * 1)

import { expect } from "@playwright/test";
// import { pageFixtures } from "../../hooks/pageFixtures";
import * as locators from "../../hooks/pageFixtures";


Given('User navigates to the application', async function () {
    await locators.pageFixtures.page.goto(locators.talismanPortal);
});

Given('User navigates to the Mercury portal', async function () {
    await locators.pageFixtures.page.goto(locators.mercuryPortal);
});

Given ('User clicks on Advanced button', async function (){
    await locators.pageFixtures.page.locator("id=details-button").click();
})

Given ('User clicks on Proceed link', async function (){
    await locators.pageFixtures.page.locator("id=proceed-link").click();
})

Given('User click on the login link', async function () {
    await locators.pageFixtures.page.locator("//a[normalize-space(text())='Log in']").click();
});


Given('User enter the username as {string}', async function (username) {
    await locators.pageFixtures.page.locator(locators.usernameField).fill(username);
});

Given('User enter the password as {string}', async function (password) {
    await locators.pageFixtures.page.locator(locators.passwordField).fill(password);
});



When('User click on the login button', async function () {
    await locators.pageFixtures.page.locator(locators.loginButton).click();
});


When('Login should fail', async function () {
    const wrongEmail = locators.pageFixtures.page.locator("//span[contains(@class,'pf-c-form__helper-text pf-m-error')]")
    await expect(wrongEmail).toBeVisible();
    console.log(" Wrong credentials");
    await locators.pageFixtures.page.waitForTimeout(2000);
});


Then('Login should be successful', async function () {
    console.log(" Successfully Logged-in")
    await locators.pageFixtures.page.reload();
    await locators.pageFixtures.page.waitForTimeout(1500);
});