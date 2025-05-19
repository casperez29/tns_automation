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

    Scenario Outline: Enable Default Colours - Validate if available in dropdown list
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on Settings "<tab>" tab
        And User clicks on Edit button for Person "<person>"
        And User ticks the checkbox "<colours>"
        And User clicks on Save filter button
        When User clicks on My roster tab
        And User clicks on the Settings gear icon
        And the popup sidebar should be displayed
        And User selects colour option "<colours>"
        When User clicks on Ok button
        Then User validates roster background color is "<colorHex>"


        Examples:
            | tab                | person   | colours  | colorHex             |
            | My Roster Settings | 20017289 | Location | rgba(0, 0, 255, 0.4) |

    Scenario Outline: Enable Field Property - Validate User cannot disable in Display settings
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on Settings "<tab>" tab
        And User clicks on Edit button for Person "<person>"
        And User ticks the checkbox "<property>"
        And User clicks on Save filter button
        When User clicks on My roster tab
        And User clicks on the Settings gear icon
        And the popup sidebar should be displayed
        And User validates field property "<property>" is available and enabled

        Examples:
            | tab                | person   | property    |
            | My Roster Settings | 20017289 | Total Hours |

    Scenario Outline: Release Settings - Current Dates Display
        And User clicks on the navigation menu
        And User clicks on Settings menu
        When User clicks on Settings "<tab>" tab
        And User clicks on Edit button for Person "<person>"
        # And User ticks the checkbox "<property>"
        And User selects display style "<display>" on property "<releaseSettings>"
        And User selects line style "<pattern>" on property "<releaseSettings>"
        And User clicks on Save filter button
        When User clicks on My roster tab
        Then User validates Roster with current dates are displaying correct pattern "<pattern>"

        Examples:
            | tab                | person   | releaseSettings | display | pattern        |
            | My Roster Settings | 20017289 | Current Dates   | Pattern | Front Diagonal |