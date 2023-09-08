Feature: Signup
    As a new user
    I want to sign up for an account
    So that I can access the platform's features
    Background: Be on the sign-up page
        Given I am on the sign-up page
        And The "Sign Up" button is disabled

    Scenario: Successful sign up
        When I fill in the sign-up form with valid information
        And I click the "Sign Up" button
        Then I should be redirected to the home page

    Scenario: Sign up with existing user
        When I fill in the sign-up form with valid information, including a existing username and email
            | username    | email               |
            | Teste260823 | teste2608@teste.com |
        And I click the "Sign Up" button
        Then I should see an error message indicating that the email is already in use

    Scenario: Sign up with invalid email format and a weak password
        When I fill in the email field with an invalid format and a weak password
        And I fill in the other fields correctly
        And I click the "Sign Up" button
        Then I should see an error message indicating that the email is invalid and password is weak

