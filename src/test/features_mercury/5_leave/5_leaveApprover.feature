@leaveApproverL1
Feature: Leave - Approver Role Level 1
     # Ethen Bryant #

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20060093"
        And User enter the password as "20060093"
        When User click on the login button
        Then Login should be successful
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard

    Scenario: Approver L1 can view all Leave Balance and Status
        Then User validates Leave Balance and Status is visible

    Scenario: Approver L1 should be able to Approve Leave Requests in Pending Status
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>" with Pending status
        And User is redirected to Leave Request for personnel "<personnel>"
        When User clicks on Approve button
        Then User is redirected to the Leave dashboard
        And User search a personnel "<personnel>"
        Then User validates personnel "<personnel>" leave request status is "<status>"

        Examples:
            | personnel | status   |
            | Aubrie  | Approved |

    Scenario: Approver L1 should be able to Deny Leave Requests
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>" with Pending status
        And User is redirected to Leave Request for personnel "<personnel>"
        When User clicks on Deny button
        Then User is redirected to the Leave dashboard
        And User search a personnel "<personnel>"
        Then User validates personnel "<personnel>" leave request status is "<status>"

        Examples:
            | personnel | status |
            | Fernando  | Denied |

    Scenario: Approver L1 can approve requests to be Approved by Approver L2
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>" with Pending status and "<hours>" hours
        And User is redirected to Leave Request for personnel "<personnel>"
        When User clicks on Approve button
        Then User is redirected to the Leave dashboard
        And User search a personnel "<personnel>"
        Then User validates personnel "<personnel>" leave request status is "<status>"

        Examples:
            | personnel | status        | hours |
            | Fernando  | Approved - L1 | 32h   |

    #### Enhancement. Enable approver to add attachments. ####

    Scenario Outline: Approver L1 can add attachment to a leave request
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

    Scenario Outline: Approver can add a comment on a leave request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        And User inputs on the comment box "<comment>"
        When User clicks on the submit comment button
        Then User validates comment "<comment>" from user "<user>" is added successfully

        Examples:
            | personnel | comment       | user    |
            | Alexia    | Test Purposes | Raphael |

    #### to get back to ####
    Scenario: Approver should not be able to Approve own Leave Request
        Then User validates Approve and Deny buttons are not visible