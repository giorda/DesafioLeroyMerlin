Feature: User Sign In
    As a registered user
    I want to sign in to my account
    So that I can access the platform's features

    Background: On Sign In Page
        Given I am on the sign-in page

    Scenario: Successful sign in
        When I fill in the sign-in form with valid credentials
            | email               | password |
            | teste2608@teste.com | aM$21Px1 |
        And I click the "Sign In" button
        Then I should be redirected to home page

    Scenario: Sign in with invalid credentials
        When I fill in the sign-in form with invalid credentials
            | email               | password      |
            | invalid@example.com | wrongPassword |
        And I click the "Sign In" button
        Then I should see an error message indicating that the credentials are incorrect
