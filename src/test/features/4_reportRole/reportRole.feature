@reportRole
Feature: Roles - Report Roles

  Background:
    Given User navigates to the application
    And User enter the username as "20017289"
    And User enter the password as "20017289"
    When User click on the login button
    And Login should be successful
    Then User clicks on Roles tab in the sidebar

  Scenario: Fields / Table / Buttons should be displayed
    When User clicks on Report roles tab
    Then User validates Report Roles table is displayed

  Scenario Outline: Create Report Role with Required fields
    When User clicks on Report roles tab
    And User clicks on Create Report Role
    And User inputs valid name "<name>"
    And User inputs valid description "<description>"
    And User ticks is Administrator checkbox
    And User selects an Organisational Role "<organisationalRole>"
    When Save button is enabled
    Then User clicks on Reports Save button


    Examples:
      | name       | description       | organisationalRole |
      | Test Admin | For test purposes | ALL                |

  Scenario Outline: Search Report Role
    When User clicks on Report roles tab
    And User Search an existing Role "<reportRole>"
    Then User validates Microster Role is displayed in the grid "<reportRole>"

    Examples:
      | reportRole |
      | Test Admin |

  Scenario Outline: Duplicate Report Role
    When User clicks on Report roles tab
    And User validates Report Roles table is displayed
    And User Search an existing Report Role "<reportRole>"
    And User validates Report Role is displayed in the grid "<reportRole>"
    When User clicks on "<reportRole>" in the grid
    And User clicks on the duplicate button
    And the Duplicate Report Role dialog is displayed
    And User inputs new role name "<newRoleName>"
    When User clicks on the Duplicate button when enabled
    Then User validates "<newRoleName>" displayed in the grid

    Examples:
      | reportRole | newRoleName  |
      | Test Admin | Test Admin 2 |

  Scenario Outline: Cancel Duplicate Report Role
    When User clicks on Report roles tab
    And User validates Report Roles table is displayed
    And User Search an existing Report Role "<reportRole>"
    And User validates Report Role is displayed in the grid "<reportRole>"
    When User clicks on "<reportRole>" in the grid
    And User clicks on the duplicate button
    And the Duplicate Report Role dialog is displayed
    And User clicks on Cancel button
    Then User validates Report Role is displayed in the grid "<reportRole>"

    Examples:
      | reportRole |
      | Test Admin |

  Scenario Outline: Report Management Landing Page
    When User clicks on Report roles tab
    And User Search an existing Role "<reportRole>"
    And User validates Microster Role is displayed in the grid "<reportRole>"
    And User double clicks on "<reportRole>" in the grid
    When User clicks on Report Management tab
    Then User validates Report Management table,search,add button is displayed

    Examples:
      | reportRole |
      | Test Admin |

  Scenario Outline: Edit Report Role Page size
    When User clicks on Report roles tab
    When User inputs data "<pageSize>" in the page size field
    Then User validates table displays desired number of data "<pageSize>"

    Examples:
      | pageSize |
      | 10       |

  Scenario Outline: Delete Report Role
    When User clicks on Report roles tab
    And User Search an existing Report Role "<reportRole>"
    And User validates Report Role is displayed in the grid "<reportRole>"
    When User clicks on "<reportRole>" in the grid
    And User clicks on the Delete button
    When the Delete "<reportRole>" dialog is displayed
    Then User clicks on the Delete button when enabled

    Examples:
      | reportRole   |
      | Test Admin   |
      | Test Admin 2 |