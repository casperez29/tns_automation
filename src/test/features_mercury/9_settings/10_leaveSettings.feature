@leaveSettings
Feature: Leave -  Settings

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario Outline: Leave Settings - Landing Page
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        Then User validates "<tab>" settings landing page

        Examples:
            | tab            |
            | Leave Settings |

    Scenario Outline: Leave Settings - Add Person Filter
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on "<tab>" tab
        And User clicks on Add filter button
        And User clicks on Apply to dropdown field
        And User selects Person option
        When User inputs "<personId>" in Person field
        Then User clicks on Save filter button

        Examples:
            | tab            | personId |
            | Leave Settings | 20017289 |