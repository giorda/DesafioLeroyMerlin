import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import { pageElements } from '../../e2e/pages/delete.page';

Given('I am logged in as a registered user', () => {
    cy.visit(pageElements.loginPage)
    cy.get(pageElements.emailInput).type('teste2608@teste.com')
    cy.get(pageElements.passwordInput).type('aM$21Px1')  
    cy.get(pageElements.signInButton).click()
    cy.wait(1000)
})
When('I navigate to the "Profile" page', () => {
    cy.get(pageElements.userIcon).click()
    cy.wait(2000)    
})
And('I select the article', () => {    
    cy.get(pageElements.articleLink).first().click()
})
And('I click the "Delete" button', (table) => {
    cy.contains(pageElements.deleteButton).click()
})
Then('I should be redirected to feed', () => {
    cy.contains(pageElements.feedPage)
})
