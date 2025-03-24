@microsterRoleCleanUp
Feature: Roles - Microster Roles Clean Up Data

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        When User clicks on Roles tab in the sidebar


Scenario Outline: Delete Existing User
        And User clicks on Users tab in the sidebar
        And User Search an existing User "<user>"
        Then User validates User is displayed in the grid "<user>"
        When User clicks on User "<user>" in the grid
        And User clicks on the Delete button
        When the Delete "<user>" dialog is displayed
        Then User clicks on the Delete button when enabled

        Examples:
            | user       |
            | testUser29 |

    Scenario Outline: Delete Existing Microster Role
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        And User validates Microster Role is displayed in the grid "<microsterRole>"
        When User clicks on "<microsterRole>" in the grid
        And User clicks on the Delete button
        When the Delete "<microsterRole>" dialog is displayed
        Then User clicks on the Delete button when enabled

        Examples:
            | microsterRole   |
            | Test Admin 2    |
            | Test Admin Role |