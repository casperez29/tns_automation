@teamRequests
Feature: Team Requests

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario Outline: My Team Requests - Landing Page
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        Then User validates My Requests landing page

        Examples:
            | workspace        |
            | My team Requests |

    Scenario Outline: My Team Requests - Create Leave Pop-up
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        And User clicks on the create leave button
        And the search Person pop-up dialog box is displayed
        When User inputs a value in the search member field
        And the table is automatically sorted
        When User clicks on the Personnel
        Then User is redirected to Leave request for personnel page

        Examples:
            | workspace        |
            | My team requests |

    Scenario Outline: My team requests - Go to leave
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        And User clicks on the Go to leave button
        Then User is redirected to Leave landing page

        Examples:
            | workspace        |
            | My team requests |

    Scenario Outline: Team Request Pending Approvals - Redirect to Leave (Status: Pending)
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        When User clicks on Pending counter
        Then User is redirected to Leave with Status Pending filter

        Examples:
            | workspace        |
            | My team requests |


    Scenario Outline: Team Request Approved Leaves - Redirect to Leave (Status: Approved)
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        When User clicks on Approved counter
        Then User is redirected to Leave with Status Approved filter

        Examples:
            | workspace        |
            | My team requests |

    Scenario Outline: Team Requests Denied Leaves - Redirect to Leave (Status: Denied)
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        When User clicks on Denied counter
        Then User is redirected to Leave with Status Denied filter

        Examples:
            | workspace        |
            | My team requests |