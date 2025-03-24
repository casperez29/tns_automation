@leave
Feature: Personal Leave Calendar

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: User navigates to Personal Leave Calendar
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Personal Leave Calendar tab
        And User is redirected to the Personal Leave Calendar dashboard

        Scenario: Today button navigates calendar back to the current day and month
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Personal Leave Calendar tab
        And User is redirected to the Personal Leave Calendar dashboard
        And User navigates to the previous month
        When User clicks on the Today button
        Then the calendar should be redirected back to the current month

    Scenario Outline: Calendar view types
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Personal Leave Calendar tab
        And User is redirected to the Personal Leave Calendar dashboard
        When User selects calendar view type "<calendarView>"
        Then User validates calendar changes view to selected view type

        Examples:
            | calendarView |
            | day          |
            | week         |
            | month        |
            | year         |
            | agenda       |