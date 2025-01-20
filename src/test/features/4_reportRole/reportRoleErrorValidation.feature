@reportRoleErrorValidation
Feature: Roles - Report Roles Error Validation

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        Then User clicks on Roles tab in the sidebar


    ## -------------- KNOWN ISSUE. NO ERROR IS DISPLAYED ----------------

    # Scenario Outline: Duplicate Report Role Error Validation
    #     When User clicks on Report roles tab
    #     And User Search an existing Role "<reportRole>"
    #     Then User validates Microster Role is displayed in the grid "<reportRole>"
    #     When User clicks on "<reportRole>" in the grid
    #     And User clicks on the duplicate button
    #     And the Duplicate Report Role dialog is displayed
    #     And User inputs new role name "<newRoleName>"
    #     When User clicks on the Duplicate button when enabled
    #     Then User validates "<newRoleName>" displayed in the grid

    #     Examples:
    #         | reportRole | newRoleName               | error                           |
    #         | Test Admin | Test Admin Role Duplicate | Must be less than 15 characters |


    Scenario Outline: Validate Report Role error validation for required fields
        When User clicks on Report roles tab
        And User clicks on Create Report Role
        And User types in description
        And User validates Report Role error validation "<id>" "<name>"

        Examples:
            | id                     | name             |
            | This field is required | Name is required |