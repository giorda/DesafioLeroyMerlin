import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import commonsPage from '../../e2e/pages/commons.page.js';
import publishPage from '../../e2e/pages/publish.page.js';
import { deleteArticle } from '../../integration/delete/requests/DELETEArticle.request.js';
import { generatedRandom } from '../random';
const pageElements = new publishPage()
const commonElements = new commonsPage()
//Background
Given('I am logged in as a registered user', () => {
    commonElements.loginPage()
    commonElements.emailInput().type('teste2608@teste.com')
    commonElements.passwordInput().type('aM$21Px1')
    commonElements.signInButton().click()
    cy.wait(1000)
})
And('I navigate to the "New Article" page', () => {
    pageElements.editorLink()
})

//Write a new article
When('I fill in the article fields with:', (table) => {
    
    table.hashes().forEach(row => {
        pageElements.titleInput().type(row.title)
        pageElements.descriptionInput().type(row.description)
        pageElements.bodyInput().type(row.body)
        pageElements.tagsInput().type(row.tags)
    })
})
Then('I should be redirected to article page', () => {
    pageElements.articlePage().should('be.visible');
})
And('I click the "Publish Article" button', () => {
    pageElements.publishButton().click()
    
})

//Write and publish an article with duplicate title
Then('I should see an error message indicating that duplicate titles are not allowed', () => {
    pageElements.titleExistingMessage().should('be.visible');
    deleteArticle('Test-Title');
})
//Write and publish an article with missing fields
When('I fill in the other fields except {string}', (field) => {
    switch (field){
        case 'title':
            pageElements.descriptionInput().type(generatedRandom)
            pageElements.bodyInput().type(generatedRandom)            
            break;
        case 'description':
            pageElements.titleInput().type(generatedRandom)
            pageElements.bodyInput().type(generatedRandom)            
            break;
        case 'body':
            pageElements.titleInput().type(generatedRandom)
            pageElements.descriptionInput().type(generatedRandom)
    }        

    })
Then('I should see error message indicating field {string} is required', (field) => {    
        pageElements.errorMessage().contains(field)
})