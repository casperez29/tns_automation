@organisationRoleError
Feature: Roles - Organisation Roles Error Validations

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        Then User clicks on Roles tab in the sidebar

    Scenario Outline: Validate Organisation error validation for required fields
        When User clicks on Organisation roles tab
        And User clicks on Create Organisation Role
        And User types in description
        And User validates Microster error validation "<id>" "<name>"

        Examples:
            | id                     | name             |
            | This field is required | Name is required |

    Scenario Outline: Duplicate Organisation Role Character Error Validation
        When User clicks on Organisation roles tab
        And User Search an existing Organisation Role "<organisationRole>"
        And User validates Organisation Role is displayed in the grid "<organisationRole>"
        When User clicks on "<organisationRole>" in the grid
        And User clicks on the duplicate button
        And the Duplicate Organisation Role dialog is displayed
        And User inputs new role name "<newRoleName>"
        Then the error validation is displayed "<error>"

        Examples:
            | organisationRole | newRoleName | error                       |
            # | Test Admin  | Test Admin Role Duplicate | Must be less than 15 characters |
            | Test Sabra       | Test        | A new role name is required |

    Scenario Outline: Duplicate Organisation Role Empty Field Error Validation
        When User clicks on Organisation roles tab
        And User Search an existing Organisation Role "<organisationRole>"
        And User validates Organisation Role is displayed in the grid "<organisationRole>"
        When User clicks on "<organisationRole>" in the grid
        And User clicks on the duplicate button
        And the Duplicate Organisation Role dialog is displayed
        And User inputs new role name "<newRoleName>"
        Then the error validation is displayed "<error>"

        Examples:
            | organisationRole | newRoleName | error                       |
            | Test Sabra       | Test        | A new role name is required |