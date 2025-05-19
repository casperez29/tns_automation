@leaveWatcher
Feature: Leave - Watcher Role Level 2
    # Addisyn Baird #

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "MICROSTERSS3"
        And User enter the password as "MICROSTERSS3"
        When User click on the login button
        Then Login should be successful
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard

    Scenario: Watcher Level 2 can ONLY view Approved Status Leaves
        Then User validates only Approved Leave Balance and Status is visible

    Scenario: Watcher Level 2 can only see specific Leave Requests assigned to them
        Then User validates only Leave Requests are visible from the following personnel:
            | personnel     |
            | Addisyn Baird |
            | Kaydence Bond |

Scenario Outline: Watcher Level 2 should not be able to edit a Leave Request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        Then User should not be able to edit the request form

        Examples:
            | personnel |
            | Alexia    |