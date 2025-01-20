@microsterRoleUserManagement
Feature: Roles - Microster Roles Landing Page

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        When User clicks on Roles tab in the sidebar

    Scenario Outline: User Management Landing Page
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        And User validates Microster Role is displayed in the grid "<microsterRole>"
        When User double clicks on "<microsterRole>" in the grid
        And User clicks on User Management tab
        And User validates User Management table,search,add button is displayed

        Examples:
            | microsterRole |
            | Test Admin    |

    Scenario Outline: Add User in User Management Table
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        And User validates Microster Role is displayed in the grid "<microsterRole>"
        When User double clicks on "<microsterRole>" in the grid
        And User clicks on User Management tab
        And User validates User Management table,search,add button is displayed
        When User clicks on Add button
        And the Add User to Microster Role dialog appears
        And User Search an existing User to add to Microster Role "<user>"
        When User clicks on existing User "<user>" in the grid
        Then User clicks on Add Users to Microster Save button

        Examples:
            | microsterRole   | user       |
            | Test Admin Role | testUser29 |