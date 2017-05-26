@First
Feature: facebook login feature, we will have diffrent username and password to login


  @vish
  Scenario: Second Scenerio---------
    Given I have login page of facebook
    When I login using vishakha@com and vishakha1234
    But My modified fuction
   
   
    @sugat
  Scenario: Second Scenerio---------
    Given I have login page of facebook
    When I login using sugat@com and sugat1234
    But My modified fuction 

@multiple
  Scenario Outline: Scenerio outline---------
    Given I have login page of facebook
    When I login using <username> and <password>
   

    Examples: 
      | username | password   |
      | akshita  | akshita123 |
      | amba     | amba1233   |
