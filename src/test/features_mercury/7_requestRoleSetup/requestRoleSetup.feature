@requestRoleSetup
Feature: Request Role Setup

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful
        And User clicks on the navigation menu
        When User clicks on Request role setup tab

    Scenario: Request role setup landing page
        # And User clicks on the navigation menu
        # When User clicks on Request role setup tab
        Then User validates Request role setup landing page

    Scenario: Request role setup - Create form
        # And User clicks on the navigation menu
        # When User clicks on Request role setup tab
        And User clicks on the Create button for Request role setup
        When User is redirected to the create form
        Then User validates the form has correct fields

    Scenario Outline: Filter: Personnel name or ID
        # And User clicks on the navigation menu
        # And User clicks on Request role setup tab
        When User types in the personnel name or id field "<personnelID>"
        Then User validates the table is automatically sorted

        Examples:
            | personnelID |
            | 20017289    |

    Scenario: Filter: Date Picker - From Date
        # And User clicks on the navigation menu
        # When User clicks on Request role setup tab
        And User clicks on the From date datepicker
        And User validates datepicker is displayed
        When User selects a specific date
        Then User validates the table is automatically sorted

    Scenario: Filter: Date Picker - To Date
        # And User clicks on the navigation menu
        # When User clicks on Request role setup tab
        And User clicks on the To date datepicker
        And User validates datepicker is displayed
        When User selects a specific date
        Then User validates the table is automatically sorted

    Scenario: Filter: Request type
        # And User clicks on the navigation menu
        # When User clicks on Request role setup tab
        And User selects a value in Request type dropdown field "<requestType>"
        Then User validates the table is automatically sorted

        Examples:
            | requestType       |
            | -- None --        |
            | Leave             |
            | Manual Allowances |
            | Timesheets        |

    Scenario: Filter: Request role
        # And User clicks on the navigation menu
        # When User clicks on Request role setup tab
        And User selects a value in Request role dropdown field "<requestRole>"
        Then User validates the table is automatically sorted

        Examples:
            | requestRole |
            | Approver    |
            | Recommender |
            | Requestor   |
            | Watcher     |

    Scenario Outline: Filter: Dynamic member search
        # And User clicks on the navigation menu
        # And User clicks on Request role setup tab
        When User types in the dynamic member search field "<member>"
        Then User validates the table displays correct data

        Examples:
            | member   |
            | 00677876 |

    Scenario Outline: Delegate dialog box
        # And User clicks on the navigation menu
        # And User clicks on Request role setup tab
        When User types in the personnel name or id field "<personnelID>"
        When User clicks on the Delegate button
        Then User validates Delegate dialog box has correct fields and buttons

        Examples:
            | personnelID |
            | 20017289    |

    Scenario Outline: Member list dialog box
        # And User clicks on the navigation menu
        # And User clicks on Request role setup tab
        When User types in the personnel name or id field "<personnelID>"
        When User clicks on the Member button
        Then User validates Member list dialog box has correct fields and buttons

        Examples:
            | personnelID |
            | 20017289    |

    Scenario Outline: Create Request Role Setup
        And User clicks on the Create button for Request role setup
        When User is redirected to the Request Role Setup form
        And User fills up the required fields with values "<personnelID>" "<requestType>" "<requestRole>" "<costCentre>"
        # # And User selects personnel "<personnelID>"
        # # And User selects start date and end date
        # # And User selects request type "<requestType>"
        # # And User selects request role "<requestRole>"
        # # And User selects cost centre "<costeCentre>"
        And User clicks on Save dynamic member setup
        And User clicks on Save Request button
        When User validates Request role setup landing page
        And User types in the personnel name or id field "<personnelID>"
        Then User validates personnel with correct request type "<personnelID>" "<requestRole>" "<requestType>"

        Examples:
            | personnelID | requestType | requestRole | costCentre |
            # | 00709663    | Leave       | Requestor   | FAA-ASEN   |
            | 00125939    | Leave       | Requestor   | FAA-ASEN   |

    Scenario Outline: Add member list to Personnel
        And User types in the personnel name or id field "<personnelID>"
        And User clicks on Member list button
        And User clicks on Add member button
        When User is redirected to the Request Role Setup form
        And User fills up Dynamic member list field "<costCentre>"
        And User clicks on Save dynamic member setup
        And User clicks on Save Request button
        When User validates Request role setup landing page
        And User types in the personnel name or id field "<personnelID>"
        When User validates personnel with correct request type "<personnelID>" "<requestRole>" "<requestType>"
        And User clicks on Member list button
        Then User validates member list is displayed for the personnel "<personnelID>"

        Examples:
            | personnelID | requestType      | requestRole | costCentre |
            # | 00291138    | Manual Allowance | Requestor   | FAA-ASEN   |
            | 00125284    | Manual Allowance | Approver    | FAA-ASEN   |

    Scenario Outline: Delegate Role to Personnel
        And User types in the personnel name or id field "<personnelID>"
        And User clicks on Delegate button
        And User clicks on Add member button
        And User fills up the Delegation form "<personnelID>"
        When User clicks on Save Delegation form
        Then User validates Delegated Personnel "<delegatePersonnel>" is displayed in the table

        Examples:
            | personnelID | delegatePersonnel | requestType      | requestRole | costCentre |
            # | 00125284    | 00582584          | Manual Allowance | Approver    | FAA-ASEN   |
            | 00125284    | 00291138          | Manual Allowance | Approver    | FAA-ASEN   |
