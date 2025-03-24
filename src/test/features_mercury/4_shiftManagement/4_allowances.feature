@allowances
Feature: Shift Management - Allowances

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: User navigates to Shift management dropdown list
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list

    Scenario: Allowances landing page
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Allowances tab
        Then User validates Allowances landing page

    Scenario: Create allowances button redirects to Request an allowance page
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Allowances tab
        When User clicks on the create allowances button
        Then User is redirected to Request and allowance page

    Scenario: Request an allowance landing page
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Allowances tab
        And User clicks on the create allowances button
        When User is redirected to Request and allowance page
        Then User validates Request an allowance landing page