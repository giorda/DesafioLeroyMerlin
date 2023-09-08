import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { pageElements } from '../../e2e/pages/signin.page';

//Background
Given('I am on the sign-in page', () => {
    cy.visit(pageElements.signInPage)    
})

//Successful sign in
When('I fill in the sign-in form with valid credentials', (table) => {
    table.hashes().forEach(row => {
        cy.get(pageElements.emailInput).type(row.email)
        cy.get(pageElements.passwordInput).type(row.password)        
    })
    
})
And('I click the "Sign In" button', () => {
    cy.get(pageElements.signInButton).click()
})
Then('I should be redirected to home page', () => {
    cy.contains(pageElements.userName).should('be.visible')
})

//Sign in with invalid credentials
When('I fill in the sign-in form with invalid credentials', (table) => {
    table.hashes().forEach(row => {
        cy.get(pageElements.emailInput).type(row.email)
        cy.get(pageElements.passwordInput).type(row.password)        
    })
})

Then('I should see an error message indicating that the credentials are incorrect', () => {
    cy.contains(pageElements.emailPasswordInvalidMessage).should('be.visible');
})