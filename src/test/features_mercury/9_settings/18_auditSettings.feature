@auditSettings
Feature: Audit -  Settings

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

        Scenario Outline: Audit Settings - Landing Page
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        Then User validates "<tab>" settings landing page

        Examples:
            | tab |
            | Audit  |