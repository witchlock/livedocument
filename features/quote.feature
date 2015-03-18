Feature: Create a quote
  As a customer
  I want to get a quote quickly
  So that I can decide whether I should continue purchase

Scenario: Create a quote with basic business information
Given an online customer who lands on our application
When I complete the basic business information and continue
Then I should get a quote with price successfully

Examples:
| business info 1 | business info 2 | some field        |
| ---             | ---             | ---               |
| coffee          | 10000           | xiangke@gmail.com |

Scenario Outline: get quote fails
When I complete the quote page with invalid data
Then it should give me hints for the fields

Examples:
| business info 1 | business info 2 | some field        |
| ---             | ---             | ---               |
| none            | 10000           | xiangke@gmail.com |
| incompleted     | 10000           | xiangke@gmail.com |

Scenario: get to some other error
Given an online customer who lands on our application
When I complete the basic business information that causes error and continue
Then I should get to an error page

Examples:
| First name | Last name  | Email             |
| ---        | ---        | ---               |
| Xiang      | error info | xiangke@gmail.com |

