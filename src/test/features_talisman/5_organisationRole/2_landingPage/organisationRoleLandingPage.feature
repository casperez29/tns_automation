@organisationRole
Feature: Roles - Organisation Roles Landing Page

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        Then User clicks on Roles tab in the sidebar

    Scenario: Organisational Roles table/buttons/fields should be displayed
        When User clicks on Organisation roles tab
        Then User validates Organisation table is displayed

    Scenario Outline: Duplicate Existing Organisation Role
        When User clicks on Organisation roles tab
        And User validates Organisation table is displayed
        And User Search an existing Organisation Role "<organisationRole>"
        And User validates Organisation Role is displayed in the grid "<organisationRole>"
        When User clicks on "<organisationRole>" in the grid
        And User clicks on the duplicate button
        And the Duplicate Organisation Role dialog is displayed
        And User inputs new role name "<newRoleName>"
        When User clicks on the Duplicate button when enabled
        Then User validates "<newRoleName>" displayed in the grid

        Examples:
            | organisationRole | newRoleName  |
            | Test Admin       | Test Admin 2 |

    Scenario Outline: Cancel Duplicate Organisation Role
        When User clicks on Organisation roles tab
        And User validates Organisation table is displayed
        And User Search an existing Organisation Role "<organisationRole>"
        And User validates Organisation Role is displayed in the grid "<organisationRole>"
        When User clicks on "<organisationRole>" in the grid
        And User clicks on the duplicate button
        And the Duplicate Organisation Role dialog is displayed
        And User clicks on Cancel button
        Then User validates Organisation Role is displayed in the grid "<organisationRole>"

        Examples:
            | organisationRole |
            | Test Sabra       |

    Scenario Outline: Edit Organisation Role Page size
        When User clicks on Organisation roles tab
        When User inputs data "<pageSize>" in the page size field
        Then User validates table displays desired number of data "<pageSize>"

        Examples:
            | pageSize |
            | 19       |