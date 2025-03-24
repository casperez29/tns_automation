@microsterRoleCreate
Feature: Roles - Microster Roles Create Suite

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        When User clicks on Roles tab in the sidebar

    Scenario Outline: Create Microster Role with Required fields
        When User clicks on Microster roles tab
        And User clicks on Create Microster Role
        And User inputs valid Name "<name>"
        And User inputs Hierarchy Level "<hierarchyLevel>"
        When Save button is enabled
        Then User clicks on Microster Save button

        Examples:
            | name            | hierarchyLevel |
            | Test Admin Role | 1              |

    Scenario: All Fields and Buttons should be displayed
        When User clicks on Microster roles tab
        And User clicks on Create Microster Role
        Then User validates fields and buttons in the create microster role are displayed