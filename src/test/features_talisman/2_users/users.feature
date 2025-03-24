@usersAdmin
Feature: Users - Admin

  Background:
    Given User navigates to the application
    And User enter the username as "20017289"
    And User enter the password as "20017289"
    When User click on the login button
    And Login should be successful
    Then User clicks on Users tab in the sidebar

  Scenario: Users table should be displayed
    Then User validates User table is displayed

  Scenario Outline: Create User with Required fields
    And User clicks on Create button
    And User inputs valid user id "<userId>"
    And User ticks Active checkbox
    And User selects a Microster Role "<microsterRole>"
    And User inputs valid email: "<emailAddress>"
    And User selects an Organisational Role "<organisationalRole>"
    When Save button is enabled
    Then User clicks on Save button


    Examples:
      | userId       | emailAddress            | microsterRole | organisationalRole |
      | testUser29   | casius.perez@tambla.com | SABRA         | ALL                |
      | test_29@.com | casius29@test.com       | SABRA         | ALL                |

  Scenario Outline: Search Existing User
    And User Search an existing User "<user>"
    Then User validates User is displayed in the grid "<user>"

    Examples:
      | user      |
      | casiusp29 |

  Scenario Outline: Delete Existing User
    And User Search an existing User "<user>"
    Then User validates User is displayed in the grid "<user>"
    When User clicks on User "<user>" in the grid
    And User clicks on the Delete button
    When the Delete "<user>" dialog is displayed
    Then User clicks on the Delete button when enabled

    Examples:
      | user         |
      | test_29@.com |

  Scenario Outline: Validate User error validation for required fields
    And User clicks on Create button
    And User inputs valid Contact Number
    And User validates error validation "<userId>" "<microsterRole>" "<organisationalRole>" "<emailAddress>"

    Examples:
      | userId                         | microsterRole                         | organisationalRole                       | emailAddress                         |
      | The User Id field is required. | The Microster Role field is required. | The Organisation Role field is required. | The Email Address field is required. |

  Scenario Outline: Edit Page size
    When User inputs data "<pageSize>" in the page size field
    Then User validates table displays desired number of data "<pageSize>"

    Examples:
      | pageSize |
      | 12       |

# Scenario Outline: Users Page Navigation
#   When User inputs page number "<pageNumber>" in the page number field
#   Then User validates table displays the correct page data "<rowData>"
#   Examples:
#     | pageNumber | rowData        |
#     | 3          | A AbdelMessieh |