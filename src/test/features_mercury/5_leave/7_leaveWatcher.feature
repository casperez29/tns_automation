@leaveWatcher
Feature: Leave - Watcher Role
    # Raphael Baird #

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20059353"
        And User enter the password as "20059353"
        When User click on the login button
        Then Login should be successful
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard

    Scenario: Watcher should not be able to see Approve/Deny buttons
        Then User validates Approve and Deny buttons are not visible

    Scenario Outline: Watcher can still add a comment on a leave request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        And User inputs on the comment box "<comment>"
        When User clicks on the submit comment button
        Then User validates comment "<comment>" from user "<user>" is added successfully

        Examples:
            | personnel | comment       | user    |
            | Alexia    | Test Purposes | Raphael |

    Scenario: Watcher can view all Status Leave and Balance
        Then User validates Leave Balance and Status is visible

    ## add scenarios for not be able to edit request ##

    Scenario Outline: Watcher should not be able to edit a Leave Request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        Then User should not be able to edit the request form

        Examples:
            | personnel |
            | Alexia    |

    Scenario: Watcher can only see specific Leave Requests assigned to them
        Then User validates only Leave Requests are visible from the following personnel:
            | personnel     |
            | Addisyn Baird |
            | Kaydence Bond |