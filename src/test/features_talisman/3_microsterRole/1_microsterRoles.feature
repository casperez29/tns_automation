# @microsterRole
# Feature: Roles - Microster Roles

#     Background:
#         Given User navigates to the application
#         And User enter the username as "casius"
#         And User enter the password as "Secrets@0429"
#         When User click on the login button
#         And Login should be successful
#         When User clicks on Roles tab in the sidebar

    # Scenario: Microster Roles table/buttons/fields should be displayed
    #     When User clicks on Microster roles tab
    #     Then User validates Microster Roles table is displayed

    # Scenario Outline: Create Microster Role with Required fields
    #     When User clicks on Microster roles tab
    #     And User clicks on Create Microster Role
    #     And User inputs valid Name "<name>"
    #     And User inputs Hierarchy Level "<hierarchyLevel>"
    #     When Save button is enabled
    #     Then User clicks on Microster Save button

    #     Examples:
    #         | name            | hierarchyLevel |
    #         | Test Admin Role | 1              |

    # Scenario Outline: Search Existing Microster Role
    #     When User clicks on Microster roles tab
    #     And User Search an existing Role "<microsterRole>"
    #     Then User validates Microster Role is displayed in the grid "<microsterRole>"

    #     Examples:
    #         | microsterRole |
    #         | Test Admin    |

    # Scenario Outline: Duplicate Existing Microster Role
    #     When User clicks on Microster roles tab
    #     And User Search an existing Role "<microsterRole>"
    #     And User validates Microster Role is displayed in the grid "<microsterRole>"
    #     When User clicks on "<microsterRole>" in the grid
    #     And User clicks on the duplicate button
    #     And the Duplicate Microster Role dialog is displayed
    #     And User inputs new role name "<newRoleName>"
    #     When User clicks on the Duplicate button when enabled
    #     Then User validates "<newRoleName>" displayed in the grid

    #     Examples:
    #         | microsterRole   | newRoleName  |
    #         | Test Admin Role | Test Admin 2 |

    # Scenario Outline: Cancel Duplicate Microster Role
    #     When User clicks on Microster roles tab
    #     And User Search an existing Role "<microsterRole>"
    #     And User validates Microster Role is displayed in the grid "<microsterRole>"
    #     When User clicks on "<microsterRole>" in the grid
    #     And User clicks on the duplicate button
    #     And the Duplicate Microster Role dialog is displayed
    #     And User clicks on Cancel button
    #     Then User validates Microster Role is displayed in the grid "<microsterRole>"

    #     Examples:
    #         | microsterRole |
    #         | Test Admin    |

    # Scenario Outline: User Management Landing Page
    #     When User clicks on Microster roles tab
    #     And User Search an existing Role "<microsterRole>"
    #     And User validates Microster Role is displayed in the grid "<microsterRole>"
    #     When User double clicks on "<microsterRole>" in the grid
    #     And User clicks on User Management tab
    #     And User validates User Management table,search,add button is displayed

    #     Examples:
    #         | microsterRole |
    #         | Test Admin    |

    # Scenario Outline: Add User in User Management Table
    #     When User clicks on Microster roles tab
    #     And User Search an existing Role "<microsterRole>"
    #     And User validates Microster Role is displayed in the grid "<microsterRole>"
    #     When User double clicks on "<microsterRole>" in the grid
    #     And User clicks on User Management tab
    #     And User validates User Management table,search,add button is displayed
    #     When User clicks on Add button
    #     And the Add User to Microster Role dialog appears
    #     And User Search an existing User to add to Microster Role "<user>"
    #     When User clicks on existing User "<user>" in the grid
    #     Then User clicks on Add Users to Microster Save button

    #     Examples:
    #         | microsterRole   | user       |
    #         | Test Admin Role | testUser29 |

    # Scenario Outline: Security Profiles Landing Page
    #     When User clicks on Microster roles tab
    #     And User Search an existing Role "<microsterRole>"
    #     And User validates Microster Role is displayed in the grid "<microsterRole>"
    #     When User double clicks on "<microsterRole>" in the grid
    #     And User clicks on Security Profiles tab
    #     Then User validates all sections are displayed

    #     Examples:
    #         | microsterRole |
    #         | Test Admin    |

    # Scenario Outline: Update Security Profiles
    #     When User clicks on Microster roles tab
    #     And User Search an existing Role "<microsterRole>"
    #     And User validates Microster Role is displayed in the grid "<microsterRole>"
    #     When User double clicks on "<microsterRole>" in the grid
    #     And User clicks on Security Profiles tab
    #     And User validates all sections are displayed
    #     When User clicks on Microster Role dropdown
    #     And User selects ReadWrite option
    #     When Save button is enabled
    #     Then User clicks on Microster Save button

    #     Examples:
    #         | microsterRole   | user       |
    #         | Test Admin Role | testUser29 |

    # Scenario Outline: Delete Existing User
    #     And User clicks on Users tab in the sidebar
    #     And User Search an existing User "<user>"
    #     Then User validates User is displayed in the grid "<user>"
    #     When User clicks on User "<user>" in the grid
    #     And User clicks on the Delete button
    #     When the Delete "<user>" dialog is displayed
    #     Then User clicks on the Delete button when enabled

    #     Examples:
    #         | user       |
    #         | testUser29 |

    # Scenario Outline: Delete Existing Microster Role
    #     When User clicks on Microster roles tab
    #     And User Search an existing Role "<microsterRole>"
    #     And User validates Microster Role is displayed in the grid "<microsterRole>"
    #     When User clicks on "<microsterRole>" in the grid
    #     And User clicks on the Delete button
    #     When the Delete "<microsterRole>" dialog is displayed
    #     Then User clicks on the Delete button when enabled

    #     Examples:
    #         | microsterRole   |
    #         | Test Admin 2    |
    #         | Test Admin Role |

