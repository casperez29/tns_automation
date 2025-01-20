@login
Feature: User Login

  Background:
    Given User navigates to the application

  Scenario: Login should be successful
    And User enter the username as "20017289"
    And User enter the password as "20017289"
    When User click on the login button
    Then Login should be successful

  Scenario: Login should not be successful
    And User enter the username as "cass"
    And User enter the password as "Secrets@0429"
    When User click on the login button
    Then Login should fail