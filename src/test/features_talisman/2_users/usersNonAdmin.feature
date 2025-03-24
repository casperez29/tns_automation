@usersNonAdmin
Feature: Users - Non Admin

  Background:
    Given User navigates to the application
    And User enter the username as "casius"
    And User enter the password as "Secrets@0429"
    When User click on the login button
    And Login should be successful

  Scenario: Non-Admin Role should not be able to see Users and Roles tabs
    And User validates Users and Roles tab is not displayed