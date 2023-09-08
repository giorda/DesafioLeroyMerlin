import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { pageElements } from '../../e2e/pages/publish.page';
import { generatedRandom } from '../random';

//Background
Given('I am logged in as a registered user', () => {
    cy.visit(pageElements.loginPage)
    cy.get(pageElements.emailInput).type('teste2608@teste.com')
    cy.get(pageElements.passwordInput).type('aM$21Px1')  
    cy.get(pageElements.signInButton).click()
    cy.wait(1000)
})
And('I navigate to the "New Article" page', () => {
    cy.visit(pageElements.editorLink)
})

//Write a new article
When('I fill in the article fields with:', (table) => {
    table.hashes().forEach(row => {
        cy.get(pageElements.titleInput).type(row.title)
        cy.get(pageElements.descriptionInput).type(row.description)
        cy.get(pageElements.bodyInput).type(row.body)
        cy.get(pageElements.tagsInput).type(row.tags)
    })
})
Then('I should be redirected to article page', () => {
    cy.get(pageElements.articlePage).should('be.visible');
})
And('I click the "Publish Article" button', () => {
    cy.get(pageElements.publishButton).click()
})

//Write and publish an article with duplicate title
Then('I should see an error message indicating that duplicate titles are not allowed', () => {
    cy.contains(pageElements.titleExistingMessage).should('be.visible');
})
//Write and publish an article with missing fields
When('I fill in the other fields except {string}', (field) => {
    switch (field){
        case 'title':
            cy.get(pageElements.descriptionInput).type(generatedRandom)
            cy.get(pageElements.bodyInput).type(generatedRandom)            
            break;
        case 'description':
            cy.get(pageElements.titleInput).type(generatedRandom)
            cy.get(pageElements.bodyInput).type(generatedRandom)            
            break;
        case 'body':
            cy.get(pageElements.titleInput).type(generatedRandom)
            cy.get(pageElements.descriptionInput).type(generatedRandom)
    }        

    })
Then('I should see error message indicating field {string} is required', (field) => {    
        cy.get(pageElements.errorMessage).contains(field)
})