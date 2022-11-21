Feature: Login feature file

@login
 Scenario Outline: User should be able to login to the application

Given User is in login page
When User enters email id <username>
And User enters password <password>
And User clicks the signin button
Then User should be logged in successfully

    Examples: 
      | username|password|
      |"prashanthi.skvl@gmail.com"|"Test@123"|
     
Scenario: User should be able to logout from the application


When User clicks the profile button
And User clicks the signout button
Then User should be logged out successfully

