@organisationRole
Feature: Roles - Organisation Roles Team Access

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        Then User clicks on Roles tab in the sidebar

    Scenario Outline: Team Access Tab Landing Page
        When User clicks on Organisation roles tab
        And User Search an existing Role "<organisationRole>"
        And User validates Organisation Role is displayed in the grid "<organisationRole>"
        And User double clicks on "<organisationRole>" in the grid
        When User clicks on Team Access tab
        Then User validates Team Access table,search,add button is displayed

        Examples:
            | organisationRole |
            | Test Admin       |

    Scenario Outline: Add Team Access
        When User clicks on Organisation roles tab
        And User Search an existing Role "<organisationRole>"
        And User validates Organisation Role is displayed in the grid "<organisationRole>"
        And User double clicks on "<organisationRole>" in the grid
        When User clicks on Team Access tab
        Then User validates Team Access table,search,add button is displayed
        When User clicks on Add button in Organisation or Team Access page
        And User validates sidebar is displayed
        And User selects a team in the dropdown list "<team>"
        And User clicks on sidebar save button

        Examples:
            | organisationRole | team |
            | Test Admin       | TEST |