@leaveApprover
Feature: Leave - Recommender Role
    # Aubrie Fry #

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "00706815"
        And User enter the password as "00706815"
        When User click on the login button
        Then Login should be successful
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard

    Scenario: Recommender can view all Leave Balance and Status
        Then User validates Leave Balance and Status is visible

    Scenario Outline: Recommender should be able to Recommend - Approve a Leave Request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>" with Pending status
        And User is redirected to Leave Request for personnel "<personnel>"
        When User clicks on Recommend "<recommend>" button
        Then User is redirected to the Leave dashboard
        And User search a personnel "<personnel>"
        Then User validates personnel "<personnel>" leave request status is "<status>"

        Examples:
            | personnel | status               | recommend |
            | Fernando  | Recommend - Approved | Approve   |

    Scenario Outline: Recommender should be able to Recommend - Deny a Leave Request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        When User clicks on Recommend "<recommend>" button
        Then User is redirected to the Leave dashboard
        And User search a personnel "<personnel>"
        Then User validates personnel "<personnel>" leave request status is "<status>"

        Examples:
            | personnel | status             | recommend |
            | Kaydence  | Recommend - Denied | Deny      |


    Scenario Outline: Recommender can add a comment on a leave request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        And User inputs on the comment box "<comment>"
        When User clicks on the submit comment button
        Then User validates comment "<comment>" from user "<user>" is added successfully

        Examples:
            | personnel | comment       | user   |
            | Aylin  | Test Purposes | Aubrie |

    Scenario: Recommender can only see specific Leave Requests assigned to them
        Then User validates only Leave Requests are visible from the following personnel:
            | personnel     |
            | Fernando |