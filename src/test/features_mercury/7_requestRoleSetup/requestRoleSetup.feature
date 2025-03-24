@requestRoleSetup
Feature: Request Role Setup

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario: Request role setup landing page
        And User clicks on the navigation menu
        When User clicks on Request role setup tab
        Then User validates Request role setup landing page

    Scenario: Request role setup - Create form
        And User clicks on the navigation menu
        When User clicks on Request role setup tab
        And User clicks on the Create button for Request role setup
        When User is redirected to the create form
        Then User validates the form has correct fields

    Scenario Outline: Filter: Personnel name or ID
        And User clicks on the navigation menu
        And User clicks on Request role setup tab
        When User types in the personnel name or id field "<personnelID>"
        Then User validates the table is automatically sorted

        Examples:
            | personnelID |
            | 20017289    |

    Scenario: Filter: Date Picker - From Date
        And User clicks on the navigation menu
        When User clicks on Request role setup tab
        And User clicks on the From date datepicker
        And User validates datepicker is displayed
        When User selects a specific date
        Then User validates the table is automatically sorted

    Scenario: Filter: Date Picker - To Date
        And User clicks on the navigation menu
        When User clicks on Request role setup tab
        And User clicks on the To date datepicker
        And User validates datepicker is displayed
        When User selects a specific date
        Then User validates the table is automatically sorted

    Scenario: Filter: Request type
        And User clicks on the navigation menu
        When User clicks on Request role setup tab
        And User selects a value in Request type dropdown field "<requestType>"
        Then User validates the table is automatically sorted

        Examples:
            | requestType       |
            | -- None --        |
            | Leave             |
            | Manual Allowances |
            | Timesheets        |

    Scenario: Filter: Request role
        And User clicks on the navigation menu
        When User clicks on Request role setup tab
        And User selects a value in Request role dropdown field "<requestRole>"
        Then User validates the table is automatically sorted

        Examples:
            | requestRole |
            | Approver    |
            | Recommender |
            | Requestor   |
            | Watcher     |

    Scenario Outline: Filter: Dynamic member search
        And User clicks on the navigation menu
        And User clicks on Request role setup tab
        When User types in the dynamic member search field "<member>"
        Then User validates the table displays correct data

        Examples:
            | member   |
            | 00677876 |