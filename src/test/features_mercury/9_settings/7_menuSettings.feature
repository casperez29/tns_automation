@menuSettings
Feature: Menu -  Settings

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario Outline: Menu Settings - Landing Page
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        Then User validates "<tab>" settings landing page

        Examples:
            | tab  |
            | Menu |

    Scenario Outline: Menu Settings - Uncheck Menu's on Personnel Level
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        And User clicks on Edit on the specified "<person>"
        When User unchecks "<menuAccess>" tickbox
        And User clicks on Save button
        And User refreshes the page
        And User clicks on the navigation menu
        Then User validates "<menuAccess>" tab is not visible

        Examples:
            | tab  | person   | menuAccess              |
            | Menu | 20017289 | My Roster               |
            | Menu | 20017289 | Team Roster             |
            | Menu | 20017289 | Overtime Unavailability |
            | Menu | 20017289 | Swap Shifts             |
            | Menu | 20017289 | Allowances              |
            | Menu | 20017289 | Leave                   |
            | Menu | 20017289 | Attendance Management   |
            | Menu | 20017289 | Personal Timesheet      |
            | Menu | 20017289 | Roster Instruction Log  |
            | Menu | 20017289 | Satellite               |
            | Menu | 20017289 | Leave Accrual           |
            | Menu | 20017289 | Timesheets              |
            | Menu | 20017289 | Personal Leave Calendar |
            | Menu | 20017289 | Overtime Decline        |
            | Menu | 20017289 | Audit                   |

    Scenario Outline: Menu Settings - Add Person Filter
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        And User clicks on Add filter button
        And User clicks on Apply to dropdown field
        And User selects Person option
        When User inputs "<personId>" in Person field
        Then User clicks on Save filter button

        Examples:
            | tab       | personId |
            | My Roster | 00677876 |

    Scenario Outline: Menu Settings - Add Organisation Unit Filter
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        And User clicks on Add filter button
        And User clicks on Apply to dropdown field
        And User selects Organisation Unit option
        When User inputs "<organisationUnit>" in Person field
        Then User clicks on Save filter button

        Examples:
            | tab       | organisationUnit |
            | My Roster | NAC-Sydney       |