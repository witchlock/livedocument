title: Live documentation
Output: livedocument.html
theme: matmuchrapna/cleaver-ribbon

--
## Feature: Create a quote
  * _As_ a customer
  * _I want_ to get a quote quickly
  * _So that_ I can decide whether I should continue purchase

--
## Scenario: Create a quote with basic business information
* _Given_ an online customer who lands on our application
* _When_ I complete the basic business information and continue
* _Then_ I should get a quote with price successfully

## Examples:
| business info 1 | business info 2 | some field        |
| ---             | ---             | ---               |
| coffee          | 10000           | xiangke@gmail.com |

--
## Scenario Outline: get quote fails
* _When_ I complete the quote page with invalid data
* _Then_ it should give me hints for the fields

## Examples:
| business info 1 | business info 2 | some field        |
| ---             | ---             | ---               |
| none            | 10000           | xiangke@gmail.com |
| incompleted     | 10000           | xiangke@gmail.com |

--
## Scenario: get to some other error
* _Given_ an online customer who lands on our application
* _When_ I complete the basic business information that causes error and continue
* _Then_ I should get to an error page

## Examples:
| First name | Last name  | Email             |
| ---        | ---        | ---               |
| Xiang      | error info | xiangke@gmail.com |

--
## Feature: User Management
  * _As_ an administrator of the application
  * _I want_ to have user authentication for all my customers
  * _So that_ I can control the user data and access

--
## Scenario: User sign up
* _Given_ an online user who first comes to the application
* _When_ I land on the register page
* _Then_ I should be able to sign up with valid information

## Examples:
| First name | Last name | Email             |
| ---        | ---       | ---               |
| Xiang      | Ke        | xiangke@gmail.com |

--
## Scenario: another scenario
* _When_ I do something
* _Then_ it should be something

--
## Scenario: User sign up 2
* _Given_ an online user who first comes to the application
* _When_ I land on the register page
* _Then_ I should be able to sign up with valid information

## Examples:
| First name | Last name | Email             |
| ---        | ---       | ---               |
| Xiang      | Ke        | xiangke@gmail.com |


--
## Scenario: User sign up 3
* _Given_ an online user who first comes to the application
* _When_ I land on the register page
* _Then_ I should be able to sign up with valid information

## Examples:
| First name | Last name | Email             |
| ---        | ---       | ---               |
| Xiang      | Ke        | xiangke@gmail.com |

