Feature: RyanairLabs
As a user I should be able to verify ticket booking functionality

  @smoke
  Scenario: Validate the ticket booking functionalities from search page to payment page
    Given I search for a flight from "DUB" to "STN" on "12/01/2023" for 2 adults and 1 child
    When I proceed to pay with selected seats and 20kg bags added
    Then login popup shows up
