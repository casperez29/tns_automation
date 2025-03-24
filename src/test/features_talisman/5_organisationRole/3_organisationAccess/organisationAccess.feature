@organisationRole
Feature: Roles - Organisation Roles Organisation Access

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        Then User clicks on Roles tab in the sidebar

    Scenario Outline: Organisation Access Tab Landing Page
        When User clicks on Organisation roles tab
        And User Search an existing Role "<organisationRole>"
        And User validates Organisation Role is displayed in the grid "<organisationRole>"
        And User double clicks on "<organisationRole>" in the grid
        When User clicks on Organisation Access tab
        Then User validates Organisation Access table,search,add button is displayed

        Examples:
            | organisationRole |
            | Test Admin       |

    Scenario Outline: Add Organisation Access
        When User clicks on Organisation roles tab
        And User Search an existing Role "<organisationRole>"
        And User validates Organisation Role is displayed in the grid "<organisationRole>"
        And User double clicks on "<organisationRole>" in the grid
        When User clicks on Organisation Access tab
        And User validates Organisation Access table,search,add button is displayed
        When User clicks on Add button in Organisation or Team Access page
        And User validates sidebar is displayed
        And User clicks on sidebar save button

        Examples:
            | organisationRole |
            | Test Admin       |