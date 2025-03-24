@loginMercury
Feature: User Login to Mercury Portal

  Background:
    Given User navigates to the Mercury portal

  Scenario: Mercury Login should be successful
    And User enter the username as "20017289"
    And User enter the password as "20017289"
    When User click on the login button
    Then Login should be successful

  Scenario: Workspace dashboard default view after login
    And User enter the username as "20017289"
    And User enter the password as "20017289"
    When User click on the login button
    And Login should be successful
    And User should be navigated to the My workspace dashboard by default

  Scenario: Mercury Login should not be successful
    And User enter the username as "cass"
    And User enter the password as "Secrets@0429"
    When User click on the login button
    Then Login should fail