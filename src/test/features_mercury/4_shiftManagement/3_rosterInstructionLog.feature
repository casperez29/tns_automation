@rosterInstructionLog
Feature: Shift Management - Roster Instruction Log

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: User navigates to Shift management dropdown list
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list

    Scenario: Roster instruction landing page
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Roster instruction tab
        Then User validates Roster instruction landing page