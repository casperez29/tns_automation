@leave
Feature: Leave

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: User navigates to Leave dashboard
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard
        Then User should validate the leave table is displaying the expected columns

    Scenario: Search bar is working as expected
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard
        When User inputs data in the Search bar
        Then the table should automatically refresh and display available data

    Scenario: Create button redirects to Create leave form
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard
        And User clicks on the create leave button
        Then User is redirected to Leave request page

    Scenario: Sort and filter button opens side bar
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard
        When User clicks on the Sort and filter button
        Then sidebar should popup

    Scenario Outline: Leave display view
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard
        And User clicks on the display view button
        When User selects a display view "<displayView>"
        Then the display view automatically changes to the selected view

        Examples:
            | displayView |
            | List        |
            | Table       |