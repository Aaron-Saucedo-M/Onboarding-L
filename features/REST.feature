Feature: REST
  As a user, If I try to load a non-existent person id, I should get an error code

  @REST @ProductionSafe @JanusBeta
  Scenario Outline: Validate status codes
    Given I use url "<url>"
    Then Status code should be "<status_code>"

    Examples:
      | url                                         | status_code |
      | /virginia-gruchalski-obituary?pid=196167379 | 200         |
      | /virginia-gruchalski-obituary?pid=0         | 404         |