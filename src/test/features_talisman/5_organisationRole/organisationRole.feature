# @organisationRole
# Feature: Roles - Organisation Roles

#   Background:
#     Given User navigates to the application
#     And User enter the username as "casius"
#     And User enter the password as "Secrets@0429"
#     When User click on the login button
#     And Login should be successful
#     Then User clicks on Roles tab in the sidebar

  # Scenario: Organisational Roles table/buttons/fields should be displayed
  #   When User clicks on Organisation roles tab
  #   Then User validates Organisation table is displayed

  # Scenario Outline: Create Organisational Role with Required fields
  #   When User clicks on Organisation roles tab
  #   And User clicks on Create Organisation Role
  #   And User inputs valid name "<name>"
  #   And User inputs valid description "<description>"
  #   Then User clicks on Create button when enabled

  #   Examples:
  #     | name       | description       |
  #     | Test Admin | For test purposes |

  # Scenario Outline: Duplicate Existing Organisation Role
  #   When User clicks on Organisation roles tab
  #   And User validates Organisation table is displayed
  #   And User Search an existing Organisation Role "<organisationRole>"
  #   And User validates Organisation Role is displayed in the grid "<organisationRole>"
  #   When User clicks on "<organisationRole>" in the grid
  #   And User clicks on the duplicate button
  #   And the Duplicate Organisation Role dialog is displayed
  #   And User inputs new role name "<newRoleName>"
  #   When User clicks on the Duplicate button when enabled
  #   Then User validates "<newRoleName>" displayed in the grid

  #   Examples:
  #     | organisationRole | newRoleName  |
  #     | Test Admin       | Test Admin 2 |

  # Scenario Outline: Cancel Duplicate Organisation Role
  #   When User clicks on Organisation roles tab
  #   And User validates Organisation table is displayed
  #   And User Search an existing Organisation Role "<organisationRole>"
  #   And User validates Organisation Role is displayed in the grid "<organisationRole>"
  #   When User clicks on "<organisationRole>" in the grid
  #   And User clicks on the duplicate button
  #   And the Duplicate Organisation Role dialog is displayed
  #   And User clicks on Cancel button
  #   Then User validates Organisation Role is displayed in the grid "<organisationRole>"

  #   Examples:
  #     | organisationRole |
  #     | Test Sabra       |

  # Scenario Outline: Organisation Access Tab Landing Page
  #   When User clicks on Organisation roles tab
  #   And User Search an existing Role "<organisationRole>"
  #   And User validates Organisation Role is displayed in the grid "<organisationRole>"
  #   And User double clicks on "<organisationRole>" in the grid
  #   When User clicks on Organisation Access tab
  #   Then User validates Organisation Access table,search,add button is displayed

  #   Examples:
  #     | organisationRole |
  #     | Test Admin       |

  # Scenario Outline: Team Access Tab Landing Page
  #   When User clicks on Organisation roles tab
  #   And User Search an existing Role "<organisationRole>"
  #   And User validates Organisation Role is displayed in the grid "<organisationRole>"
  #   And User double clicks on "<organisationRole>" in the grid
  #   When User clicks on Team Access tab
  #   Then User validates Team Access table,search,add button is displayed

  #   Examples:
  #     | organisationRole |
  #     | Test Admin       |

  # Scenario Outline: Add Organisation Access
  #   When User clicks on Organisation roles tab
  #   And User Search an existing Role "<organisationRole>"
  #   And User validates Organisation Role is displayed in the grid "<organisationRole>"
  #   And User double clicks on "<organisationRole>" in the grid
  #   When User clicks on Organisation Access tab
  #   And User validates Organisation Access table,search,add button is displayed
  #   When User clicks on Add button in Organisation or Team Access page
  #   And User validates sidebar is displayed
  #   And User clicks on sidebar save button

  #   Examples:
  #     | organisationRole |
  #     | Test Admin       |

  # Scenario Outline: Add Team Access
  #   When User clicks on Organisation roles tab
  #   And User Search an existing Role "<organisationRole>"
  #   And User validates Organisation Role is displayed in the grid "<organisationRole>"
  #   And User double clicks on "<organisationRole>" in the grid
  #   When User clicks on Team Access tab
  #   Then User validates Team Access table,search,add button is displayed
  #   When User clicks on Add button in Organisation or Team Access page
  #   And User validates sidebar is displayed
  #   And User selects a team in the dropdown list "<team>"
  #   And User clicks on sidebar save button

  #   Examples:
  #     | organisationRole | team |
  #     | Test Admin       | TEST |

  # Scenario Outline: Edit Organisation Role Page size
  #   When User clicks on Organisation roles tab
  #   When User inputs data "<pageSize>" in the page size field
  #   Then User validates table displays desired number of data "<pageSize>"

  #   Examples:
  #     | pageSize |
  #     | 19       |

  # Scenario Outline: Delete Existing Organisation Role
  #   When User clicks on Organisation roles tab
  #   And User Search an existing Organisation Role "<organisationRole>"
  #   And User validates Organisation Role is displayed in the grid "<organisationRole>"
  #   When User clicks on "<organisationRole>" in the grid
  #   And User clicks on the Delete button
  #   When the Delete "<organisationRole>" dialog is displayed
  #   Then User clicks on the Delete button when enabled

  #   Examples:
  #     | organisationRole |
  #     | Test Admin 2     |
  #     | Test Admin       |