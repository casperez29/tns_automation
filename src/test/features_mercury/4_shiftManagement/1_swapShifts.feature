@swapShifts
Feature: Shift Management - Swap Shifts

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: User navigates to Shift management dropdown list
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        Then User validates the shift management categories

    Scenario: Swap shifts - Landing Page
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Swap shifts tab
        Then User validates Swap shifts landing page

    Scenario: Swap shifts - Create Suite
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Swap shifts tab
        And User clicks on Create button
        Then User is redirected to the create swap shifts page

    Scenario: Swap shifts - Sort and Filter Landing Page
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Swap shifts tab
        When User clicks on the Sort and Filter button
        Then User validates Sort and Filter fields and buttons

    Scenario Outline: Swap Shift Requests - Display View
        And User clicks on the navigation menu
        When User clicks on the Shift management dropdown menu list
        And User clicks on Swap shifts tab
        And User clicks on the display view button
        When User selects a display view "<displayView>"
        Then the display view automatically changes to the selected view

        Examples:
            | displayView |
            | List        |
            | Table       |

    Scenario Outline: Search: Status
        And User clicks on the navigation menu
        And User clicks on Request role setup tab
        When User types in the personnel name or id field "<personnelID>"
        Then User validates the table is automatically sorted

        Examples:
            | personnelID |
            | 20017289    |