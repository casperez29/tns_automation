@overtimeUnavailability
Feature: Shift Management - Overtime Unavailability

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: Overtime unavailability landing page
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Overtime unavailability tab
        Then User validates Overtime unavailability landing page

    Scenario: Today button navigates calendar back to the current day and month
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Overtime Unavailability tab
        And User navigates to the previous month
        When User clicks on the Today button
        Then the calendar should be redirected back to the current month

    Scenario Outline: Calendar view types
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Overtime Unavailability tab
        When User selects calendar view type "<calendarView>"
        Then User validates calendar changes view to selected view type

        Examples:
            | calendarView |
            | day          |
            | week         |
            | month        |
            | year         |
            | agenda       |