@microsterRoleError
Feature: Roles - Microster Roles Error Validations

    Background:
        Given User navigates to the application
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        And Login should be successful
        When User clicks on Roles tab in the sidebar


    Scenario Outline: Duplicate Microster Role Error Validation
        When User clicks on Microster roles tab
        And User Search an existing Role "<microsterRole>"
        And User validates Microster Role is displayed in the grid "<microsterRole>"
        When User clicks on "<microsterRole>" in the grid
        And User clicks on the duplicate button
        And the Duplicate Microster Role dialog is displayed
        And User inputs new role name "<newRoleName>"
        Then the error validation is displayed "<error>"

        Examples:
            | microsterRole   | newRoleName               | error                           |
            | Test Admin      | Test Admin Role Duplicate | Must be less than 15 characters |


    Scenario Outline: Validate Microster error validation for required fields
        When User clicks on Microster roles tab
        And User clicks on Create Microster Role
        And User types in description
        And User validates Microster error validation "<id>" "<name>"

        Examples:
            | id                     | name             |
            | This field is required | Name is required |

    # Scenario Outline: Microster Role Page Navigation
    #     When User clicks on Microster roles tab
    #     When User inputs page number "<pageNumber>" in the page number field
    #     Then User validates table displays the correct page data "<rowData>"
    #     Examples:
    #         | pageNumber | rowData   |
    #         | 3          | TESTFINAL |