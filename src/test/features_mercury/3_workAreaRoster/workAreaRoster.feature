@workAreaRoster
Feature: Work area Roster

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: User navigates to Work area roster calendar
        And User clicks on the navigation menu
        When User clicks on Work area roster tab
        Then User validates current calendar roster is displayed

    Scenario: Work area roster Display Settings popup sidebar
        And User clicks on the navigation menu
        When User clicks on My roster tab
        And User validates current calendar roster is displayed
        When User clicks on the Settings gear icon
        And the popup sidebar should be displayed
        Then User validates Display Settings fields and buttons

    Scenario: Work area roster Date-picker is available and working
        And User clicks on the navigation menu
        When User clicks on My roster tab
        And User clicks on the datepicker icon
        When datepicker calendar is displayed
        Then User validates datepicker functionalities