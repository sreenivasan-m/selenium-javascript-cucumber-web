Feature: Google
As a user I should be able to verify google search functionality

  @smoke
  Scenario: Validate the search functionality in google search
    Given I search for "selenium dev" in google search
    When I proceed to open the selenium website
    And I search a function in text field
    Then I should see the searched results
