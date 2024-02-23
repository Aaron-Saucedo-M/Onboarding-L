Feature: Guest Book
  As a user, I want to be able to sign the guest book

  @Webdriver @JanusBeta @ProductionSafe @GuestBook @NameSection
  Scenario: Sign the Guest Book
    Given I am on an obit page
    Then I validate the person's first name
    Then I sign the guest book
