@leaveRequestor
Feature: Leave - Requestor Role
    # Josue Miller #

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "MICROSTERSS2"
        And User enter the password as "MICROSTERSS2"
        When User click on the login button
        Then Login should be successful
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard

    Scenario Outline: Requestor can create a Personal Leave Request
        And User clicks on the create leave button
        And User validates Approver field is auto populated with approver "<approver>"
        And User clicks on Add leave day button
        And User selects leave "<leave>" on the leave type field
        And User selects Start Date and End Date "<startDate>" "<endDate>"
        And User clicks on Add leave button
        # And User validate Hours and Total Hours Requested are equal "<totalHoursRequested>"
        When User clicks on Submit Leave Request button
        Then User is redirected to the Leave dashboard

        Examples:
            | leave  | approver | startDate  | endDate | totalHoursRequested |
            | ALEAVE | Ethen | currentDay | 1Day    | 24                  |

    Scenario Outline: Requestor can create a Leave Request for other Personnel
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        And User clicks on the create leave button
        And the search Person pop-up dialog box is displayed
        When User inputs a value in the search member field "<personnelID>"
        When User clicks on the Personnel ID "<personnelID>"
        And User clicks on Add leave day button
        And User selects leave "<leave>" on the leave type field
        And User clicks on Add button
        When User clicks on Submit button
        Then User is redirected to Leave landing page

        Examples:
            | workspace        | leave  | personnelID |
            | My team requests | ALEAVE | 00916046    |

    Scenario: Requestor can view Leave Balance and Status
        Then User validates Leave Balance and Status is visible

    Scenario Outline: Requestor cannot cancel other Personnel's Leave Request
        And User search a personnel "<personnel>"
        And User validates Cancel button is not enabled for personnel "<personnel>"
        And User search a personnel "<requestor>"
        Then User validates leave status can still be cancelled

        Examples:
            | personnel | requestor |
            | Devyn     | Kaydence  |

    Scenario Outline: Requestor can add a comment on a leave request
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        And User inputs on the comment box "<comment>"
        When User clicks on the submit comment button
        Then User validates comment "<comment>" from user "<user>" is added successfully

        Examples:
            | personnel | comment       | user    |
            | Alexia    | Test Purposes | Raphael |