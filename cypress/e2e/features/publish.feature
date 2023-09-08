Feature: Write and Publish an Article
    As a content creator
    I want to write and publish articles on the platform
    So that I can share my knowledge and insights

    Background: Be on the creation page
        Given I am logged in as a registered user
        And I navigate to the "New Article" page

    Scenario: Write a new article
        When I fill in the article fields with:
            | title      | description      | body  | tags |
            | Test Title | Test Description | Test. | test |
        And I click the "Publish Article" button
        Then I should be redirected to article page

    Scenario Outline: Write and publish an article with missing fields
        When I fill in the other fields except "<field>"
        And I click the "Publish Article" button
        Then I should see error message indicating field "<field>" is required

        Examples:
            | field       |
            | title       |
            | description |
            | body        |

    Scenario: Write and publish an article with duplicate title
        When I fill in the article fields with:
            | title      | description      | body  | tags |
            | Test Title | Test Description | Test. | test |
        And I click the "Publish Article" button
        Then I should see an error message indicating that duplicate titles are not allowed

