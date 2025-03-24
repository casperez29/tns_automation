@roster
Feature: My Roster

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: User navigates to My Roster calendar
        And User clicks on the navigation menu
        When User clicks on My roster tab
        Then User validates current calendar roster is displayed

    Scenario: Date-picker is available and working
        And User clicks on the navigation menu
        When User clicks on My roster tab
        And User clicks on the datepicker icon
        When datepicker calendar is displayed
        Then User validates datepicker functionalities

    Scenario: My Roster Display Settings popup sidebar
        And User clicks on the navigation menu
        When User clicks on My roster tab
        And User validates current calendar roster is displayed
        And User clicks on the Settings gear icon
        When the popup sidebar should be displayed
        Then User validates Display Settings fields and buttons

    Scenario: Current Roster calendar should always have a Roster displayed
        And User clicks on the navigation menu
        When User clicks on My roster tab
        And User validates current calendar roster is displayed
        Then User validates a roster is available for the current month

    Scenario: Previous Roster calendar should always have a Roster displayed
        And User clicks on the navigation menu
        When User clicks on My roster tab
        And User clicks on the calendar previous button
        Then User validates a roster is available for the current month

    # BUG - https://dev.azure.com/Microster/Microster/_workitems/edit/363
    Scenario: Current date shift details should be loaded automatically
        And User clicks on the navigation menu
        When User clicks on My roster tab
        Then User validates shift details for the current date is loaded automatically

    Scenario: Display Settings - Fields
        And User clicks on the navigation menu
        When User clicks on My roster tab
        And User validates current calendar roster is displayed
        And User clicks on the Settings gear icon
        And the popup sidebar should be displayed
        And User checks all fields
        When User clicks on Ok button
        Then User validates current calendar roster is displayed

    Scenario Outline: Display Settings - Colours
        And User clicks on the navigation menu
        When User clicks on My roster tab
        And User validates current calendar roster is displayed
        And User clicks on the Settings gear icon
        And the popup sidebar should be displayed
        When User clicks on Colours dropdown field
        And User validates options are available
        And User clicks on "<colours>" option
        Then User validates current calendar roster is displayed
        Examples:
            | colours |
            | Task    |
            | Shift   |