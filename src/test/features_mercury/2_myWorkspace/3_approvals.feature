@approvals
Feature: Approvals

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario Outline: My Approvals - Landing Page
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        Then User validates My Requests landing page

        Examples:
            | workspace    |
            | My Approvals |

    Scenario Outline: My Approvals - Go to leave
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        And User clicks on the Go to leave button
        Then User is redirected to Leave landing page

        Examples:
            | workspace    |
            | My Approvals |

    Scenario Outline: Pending Approvals - Redirect to Leave (Status: Pending)
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        When User clicks on Pending counter
        Then User is redirected to Leave with Status Pending filter

        Examples:
            | workspace    |
            | My Approvals |


    Scenario Outline: Approved Leaves - Redirect to Leave (Status: Approved)
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        When User clicks on Approved counter
        Then User is redirected to Leave with Status Approved filter

        Examples:
            | workspace    |
            | My Approvals |

    Scenario Outline: Denied Leaves - Redirect to Leave (Status: Denied)
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        When User clicks on Denied counter
        Then User is redirected to Leave with Status Denied filter

        Examples:
            | workspace    |
            | My Approvals |