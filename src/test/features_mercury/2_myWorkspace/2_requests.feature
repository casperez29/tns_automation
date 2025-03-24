@myRequests
Feature: My requests

    Background:
        Given User navigates to the Mercury portal
        And User enter the username as "20017289"
        And User enter the password as "20017289"
        When User click on the login button
        Then Login should be successful

    Scenario Outline: My Requests - Landing Page
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        Then User validates My Requests landing page

        Examples:
            | workspace   |
            | My Requests |

    Scenario Outline: My Requests - Create Allowances
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        And User clicks on the create allowances button
        Then User is redirected to Request an allowance page

        Examples:
            | workspace   |
            | My Requests |

    Scenario Outline: My Requests - Create Leave
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        And User clicks on the create leave button
        Then User is redirected to Leave request page

        Examples:
            | workspace   |
            | My Requests |

    Scenario Outline: My Requests - Go to Allowances
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        And User clicks on the Go to allowances button
        Then User is redirected to Allowances landing page

        Examples:
            | workspace   |
            | My Requests |

    Scenario Outline: My Requests - Go to leave
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        And User clicks on the Go to leave button
        Then User is redirected to Leave landing page

        Examples:
            | workspace   |
            | My Requests |

    Scenario Outline: My Requests - Go to timesheets
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        And User clicks on the Go to timesheets button
        Then User is redirected to Timesheets landing page

        Examples:
            | workspace   |
            | My Requests |

    Scenario Outline: My Request Pending Leaves - Redirect to Leave (Status: Pending)
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        When User clicks on Pending counter
        Then User is redirected to Leave with Status Pending filter

        Examples:
            | workspace    |
            | My Approvals |

    Scenario Outline: My Request Approved Leaves - Redirect to Leave (Status: Approved)
        And User clicks on the navigation menu
        When User clicks on My workspace tab
        And User clicks on "<workspace>" workspace tab
        When User should be redirected to "<workspace>" tab
        When User clicks on Approved counter
        Then User is redirected to Leave with Status Approved filter

        Examples:
            | workspace    |
            | My Approvals |