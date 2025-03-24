@shiftManagement
Feature: Shift Management -  Settings

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario Outline: Shift Management Settings - Landing Page
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        Then User validates "<tab>" settings landing page

        Examples:
            | tab                              |
            | Swap Shifts Settings             |
            | Overtime Unavailability Settings |
            | Roster Instruction Log Settings  |
            | Allowances Settings              |