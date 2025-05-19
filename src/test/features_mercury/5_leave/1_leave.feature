@leave
Feature: Leave

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "casius"
        And User enter the password as "Secrets@0429"
        When User click on the login button
        Then Login should be successful
        And User clicks on the navigation menu
        When User clicks on Leave dropdown tab
        And User clicks on Leave tab
        And User is redirected to the Leave dashboard

    Scenario Outline: An Employee can Create a Personal Leave Request
        And User clicks on the create leave button
        And User validates Approver field is auto populated with approver "<approver>"
        And User clicks on Add leave day button
        And User selects leave "<leave>" on the leave type field
        And User selects Start Date and End Date "<startDate>" "<endDate>"
        And User clicks on Add button
        And User validate Hours and Total Hours Requested are equal "<totalHoursRequested>"
        When User clicks on Submit button
        Then User is redirected to Leave landing page

        Examples:
            | leave  | approver | startDate  | endDate | totalHoursRequested |
            | ALEAVE | Fernando | currentDay | 1Day    | 24                  |

    Scenario: An Employee can view Leave Balance and Status
        Then User validates Leave Balance and Status is visible

    Scenario Outline: An Employee can add attachment to a leave request
        And User selects the personnel "<personnel>"
        And User clicks on Add attachment button
        And User uploads a file
        When User clicks on Upload button
        Then User validates attachment is successfully added on the Leave Request

        Examples:
            | personnel |
            | Devyn  |

    ### BUG TO RAISE: After submitting comment, it should not redirect to leave dashboard ###
    Scenario Outline: An Employee can add a comment on a leave request
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        And User inputs on the comment box "<comment>"
        When User clicks on the submit comment button
        Then User validates comment "<comment>" from user "<user>" is added successfully

        Examples:
            | personnel | comment       | user    |
            | Devyn     | Test Purposes | Raphael |

    Scenario: An Employee can Edit own Leave Request prior to Approval
        And User search a personnel "<personnel>"
        And User selects the personnel "<personnel>"
        And User is redirected to Leave Request for personnel "<personnel>"
        And User clicks on Edit Leave Request button
        And User selects leave "<leave>" on the leave type field
        And User selects Start Date and End Date "<startDate>" "<endDate>"
        And User clicks on Add button
        And User validate Hours and Total Hours Requested are equal "<totalHoursRequested>"
        When User clicks on Submit button
        Then User is redirected to Leave landing page

        Examples:
            | leave       | startDate | endDate    | totalHoursRequested |
            | BEREAVEMENT | Fernando  | currentDay | 1Day                |

    Scenario: An Employee can cancel own Leave Request prior to Approval
        When User validates status is not yet Approved
        Then User validates leave status can still be cancelled


# Scenario: User navigates to Leave dashboard
#     And User clicks on the navigation menu
#     When User clicks on Leave dropdown tab
#     And User clicks on Leave tab
#     And User is redirected to the Leave dashboard
#     Then User should validate the leave table is displaying the expected columns

# Scenario: Search bar is working as expected
#     And User clicks on the navigation menu
#     When User clicks on Leave dropdown tab
#     And User clicks on Leave tab
#     And User is redirected to the Leave dashboard
#     When User inputs data in the Search bar
#     Then the table should automatically refresh and display available data

# Scenario: Create button redirects to Create leave form
#     And User clicks on the navigation menu
#     When User clicks on Leave dropdown tab
#     And User clicks on Leave tab
#     And User is redirected to the Leave dashboard
#     And User clicks on the create leave button
#     Then User is redirected to Leave request page

# Scenario: Sort and filter button opens side bar
#     And User clicks on the navigation menu
#     When User clicks on Leave dropdown tab
#     And User clicks on Leave tab
#     And User is redirected to the Leave dashboard
#     When User clicks on the Sort and filter button
#     Then sidebar should popup

# Scenario Outline: Leave display view
#     And User clicks on the navigation menu
#     When User clicks on Leave dropdown tab
#     And User clicks on Leave tab
#     And User is redirected to the Leave dashboard
#     And User clicks on the display view button
#     When User selects a display view "<displayView>"
#     Then the display view automatically changes to the selected view

#     Examples:
#         | displayView |
#         | List        |
#         | Table       |

# Scenario Outline: Approver - Approve a Leave Request
#     And User clicks on the Go to leave button
#     Then User is redirected to Leave landing page
#     And User selects personnel "<personnel>" leave request
#     And User is redirected to Leave Request for personnel "<personnel>"
#     When User clicks on Approve button
#     And User is redirected to Leave landing page
#     Then User validates leave status approved for personnel "<personnel>"

#     Examples:
#         | workspace        | personnel   |
#         | My team requests | Paul Meyers |

# Scenario Outline: Approver - Deny a Leave Request
#     And User clicks on the Go to leave button
#     Then User is redirected to Leave landing page
#     And User selects personnel "<personnel>" leave request
#     And User is redirected to Leave Request for personnel "<personnel>"
#     When User clicks on Deny button
#     And User is redirected to the Leave dashboard
#     Then User validates leave status approved for personnel "<personnel>"

#     Examples:
#         | workspace        | personnel    |
#         | My team requests | Nathan Hines |