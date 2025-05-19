@leaveApproverL2
Feature: Leave - Approver Role Level 2
    # Aylin Ayer #

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "MICROSTERSS4"
        And User enter the password as "MICROSTERSS4"
        When User click on the login button
        Then Login should be successful
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard

    Scenario: Approver Level 2 can APPROVE all Leaves approved from L1
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>" with Approved L1 status
        And User is redirected to Leave Request for personnel "<personnel>"
        When User clicks on Approve button
        Then User is redirected to the Leave dashboard
        And User search a personnel "<personnel>"
        Then User validates personnel "<personnel>" leave request status is "<status>"

        Examples:
            | personnel | status   |
            | Fernando  | Approved |

    Scenario: Approver Level 2 can DENY all Leaves approved from L1
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>" with Approved L1 status
        And User is redirected to Leave Request for personnel "<personnel>"
        When User clicks on Deny button
        Then User is redirected to the Leave dashboard
        And User search a personnel "<personnel>"
        Then User validates personnel "<personnel>" leave request status is "<status>"

        Examples:
            | personnel | status |
            | Fernando  | Denied |

    Scenario: Approver Level 2 can only see requests assigned to them
        Then User validates only Leave Requests are visible from the following personnel:
            | personnel     |
            | Addisyn Baird |
            | Kaydence Bond |

    Scenario Outline: Approver L2 can add attachment to a leave request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        And User clicks on Add attachment button
        And User uploads a file
        When User clicks on Upload button
        Then User validates attachment is successfully added on the Leave Request

        Examples:
            | personnel | comment       | user    |
            | Alexia    | Test Purposes | Raphael |