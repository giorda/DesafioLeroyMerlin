import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { pageElements } from '../../e2e/pages/signup.page';
import { generatedEmail, generatedPassword, generatedUsername } from '../random';

//Background
Given('I am on the sign-up page', () => {
    cy.visit(pageElements.signUpPage);
})
And('The "Sign Up" button is disabled', () => {
    cy.get(pageElements.signUpButton).should('be.disabled')
})
//Successful sign up
When('I fill in the sign-up form with valid information', () => {
    cy.get(pageElements.usernameInput).type(generatedUsername)
    cy.get(pageElements.emailInput).type(generatedEmail)
    cy.get(pageElements.passwordInput).type(generatedPassword)
})
And('I click the "Sign Up" button', () => {
    cy.get(pageElements.signUpButton).click()
})
Then('I should be redirected to the home page', () => {
    cy.get(pageElements.userIcon).should('be.visible')
})
//Sign up with existing user
When('I fill in the sign-up form with valid information, including a existing username and email', (table) => {
    table.hashes().forEach(row => {
        cy.get(pageElements.usernameInput).type(row.username)
        cy.get(pageElements.emailInput).type(row.email)        
    })
    cy.get(pageElements.passwordInput).type(generatedPassword)
})
Then('I should see an error message indicating that the email is already in use', () => {
    cy.contains(pageElements.usernameExistingMessage).should('be.visible')
    cy.contains(pageElements.emailExistingMessage).should('be.visible')
})
//Sign up with invalid email format
When('I fill in the email field with an invalid format and a weak password', () => {
    cy.get(pageElements.emailInput).type('qwerty')
    cy.get(pageElements.passwordInput).type('123')
})
And('I fill in the other fields correctly', () => {
    cy.get(pageElements.usernameInput).type(generatedUsername)
})
Then('I should see an error message indicating that the email is invalid and password is weak', () => {
    cy.contains('Erro').should('be.visible')
})
