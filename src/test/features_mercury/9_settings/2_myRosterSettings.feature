@myRosterSettings
Feature: My Roster -  Settings

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario Outline: My Roster - Landing Page
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        Then User validates "<tab>" settings landing page

        Examples:
            | tab                |
            | My Roster Settings |

    Scenario Outline: My Roster Settings - Add Person Filter
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on Settings "<tab>" tab
        And User clicks on Add filter button
        And User clicks on Apply to dropdown field
        And User selects option "<option>"
        When User inputs id "<personId>" in Person field
        And User selects the data in the dropdown list
        Then User clicks on Save filter button

        Examples:
            | tab                | personId | option |
            | My Roster Settings | 00677876 | Person |

    Scenario Outline: My Roster Settings - Add Organisation Unit Filter
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on Settings "<tab>" tab
        And User clicks on Add filter button
        And User clicks on Apply to dropdown field
        And User selects option "<option>"
        When User inputs Cost Centre "<organisationUnit>" in Organisation Unit field
        And User selects the data in the dropdown list
        Then User clicks on Save filter button

        Examples:
            | tab                | organisationUnit | option            |
            | My Roster Settings | NAC-Sydney       | Organisation Unit |