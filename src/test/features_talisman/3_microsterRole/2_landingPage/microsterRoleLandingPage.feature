@microsterRoleLandingPage
Feature: Roles - Microster Roles Landing Page

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        When User clicks on Roles tab in the sidebar

    Scenario: Microster Roles table/buttons/fields should be displayed
        When User clicks on Microster roles tab
        Then User validates Microster Roles table is displayed

    Scenario Outline: Search Existing Microster Role
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        Then User validates Microster Role is displayed in the grid "<microsterRole>"

        Examples:
            | microsterRole |
            | Test Admin    |

    Scenario Outline: Duplicate Existing Microster Role
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        And User validates Microster Role is displayed in the grid "<microsterRole>"
        When User clicks on "<microsterRole>" in the grid
        And User clicks on the duplicate button
        And the Duplicate Microster Role dialog is displayed
        And User inputs new role name "<newRoleName>"
        When User clicks on the Duplicate button when enabled
        Then User validates "<newRoleName>" displayed in the grid

        Examples:
            | microsterRole   | newRoleName  |
            | Test Admin Role | Test Admin 2 |

    Scenario Outline: Cancel Duplicate Microster Role
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        And User validates Microster Role is displayed in the grid "<microsterRole>"
        When User clicks on "<microsterRole>" in the grid
        And User clicks on the duplicate button
        And the Duplicate Microster Role dialog is displayed
        And User clicks on Cancel button
        Then User validates Microster Role is displayed in the grid "<microsterRole>"

        Examples:
            | microsterRole |
            | Test Admin    |

    Scenario Outline: Edit Microster Table Page size
        When User clicks on Microster roles tab
        When User inputs data "<pageSize>" in the page size field
        Then User validates table displays desired number of data "<pageSize>"

        Examples:
            | pageSize |
            | 11       |