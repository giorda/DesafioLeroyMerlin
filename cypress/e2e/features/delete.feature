Feature: Article Deletion
    As a content creator
    I want to delete my published articles
    So that I can remove content that is no longer relevant

    Scenario: Delete a published article
        Given I am logged in as a registered user
        When I navigate to the "Profile" page
        And I select the article
        And I click the "Delete" button
        Then I should be redirected to the home page