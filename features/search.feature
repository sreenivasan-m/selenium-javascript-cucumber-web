Feature: Google and Selenium Validations
As a user I should be able to verify google search functionality

  @smoke
  Scenario: Validate the selenium page by searching using google
    Given I search for "selenium.dev" in google search
    When I proceed to open the selenium website
    And I navigate to About page
    Then I should see the details of About Selenium
