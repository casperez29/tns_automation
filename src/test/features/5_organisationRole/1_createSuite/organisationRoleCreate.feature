@organisationRoleCreate
Feature: Roles - Organisation Roles Create Suite

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        Then User clicks on Roles tab in the sidebar

    Scenario Outline: Create Organisational Role with Required fields
        When User clicks on Organisation roles tab
        And User clicks on Create Organisation Role
        And User inputs valid name "<name>"
        And User inputs valid description "<description>"
        Then User clicks on Create button when enabled

        Examples:
            | name       | description       |
            | Test Admin | For test purposes |