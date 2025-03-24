@myRequests
Feature: My Workspace

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario Outline: User navigates to my workspace tabs
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User redirects to the My Workspace dashboard
        When User clicks on "<workspace>" workspace tab
        Then User should be redirected to "<workspace>" dashboard

        Examples:
            | workspace        |
            | My Requests      |
            | My Team Requests |
            | My Approvals     |