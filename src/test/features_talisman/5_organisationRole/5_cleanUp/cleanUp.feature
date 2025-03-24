@organisationRole
Feature: Roles - Organisation Roles Clean Up Data

  Background:
    Given User navigates to the application
    And User enter the username as "20017289"
    And User enter the password as "20017289"
    When User click on the login button
    And Login should be successful
    Then User clicks on Roles tab in the sidebar

  Scenario Outline: Delete Existing Organisation Role
    When User clicks on Organisation roles tab
    And User Search an existing Organisation Role "<organisationRole>"
    And User validates Organisation Role is displayed in the grid "<organisationRole>"
    When User clicks on "<organisationRole>" in the grid
    And User clicks on the Delete button
    When the Delete "<organisationRole>" dialog is displayed
    Then User clicks on the Delete button when enabled

    Examples:
      | organisationRole |
      | Test Admin 2     |
      | Test Admin       |