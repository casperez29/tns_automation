@microsterRoleSecurityProfile
Feature: Roles - Microster Roles Security Profile

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        When User clicks on Roles tab in the sidebar


    Scenario Outline: Security Profiles Landing Page
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        And User validates Microster Role is displayed in the grid "<microsterRole>"
        When User double clicks on "<microsterRole>" in the grid
        And User clicks on Security Profiles tab
        Then User validates all sections are displayed

        Examples:
            | microsterRole |
            | Test Admin    |

    Scenario Outline: Update Security Profiles
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        And User validates Microster Role is displayed in the grid "<microsterRole>"
        When User double clicks on "<microsterRole>" in the grid
        And User clicks on Security Profiles tab
        And User validates all sections are displayed
        When User clicks on Microster Role dropdown
        And User selects ReadWrite option
        When Save button is enabled
        Then User clicks on Microster Save button

        Examples:
            | microsterRole   | user       |
            | Test Admin Role | testUser29 |