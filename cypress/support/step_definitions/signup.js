import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import commonsPage from '../../e2e/pages/commons.page.js';
import signInPage from '../../e2e/pages/signup.page.js';
import { generatedEmail, generatedPassword, generatedUsername } from '../random';
const pageElements = new signInPage();
const commonElements = new commonsPage();

//Background
Given('I am on the sign-up page', () => {
    pageElements.signUpPage();
})
And('The "Sign Up" button is disabled', () => {
    pageElements.signUpButton().should('be.disabled')
})
//Successful sign up
When('I fill in the sign-up form with valid information', () => {
    pageElements.usernameInput().type(generatedUsername)
    commonElements.emailInput().type(generatedEmail)
    commonElements.passwordInput().type(generatedPassword)
})
And('I click the "Sign Up" button', () => {
    pageElements.signUpButton().click()
})
Then('I should be redirected to the home page', () => {
    pageElements.userIcon().should('be.visible')
})
//Sign up with existing user
When('I fill in the sign-up form with valid information, including a existing username and email', (table) => {
    table.hashes().forEach(row => {
        pageElements.usernameInput().type(row.username)
        commonElements.emailInput().type(row.email)        
    })
    commonElements.passwordInput().type(generatedPassword)
})
Then('I should see an error message indicating that the email is already in use', () => {
    pageElements.usernameExistingMessage().should('be.visible')
    pageElements.emailExistingMessage().should('be.visible')
})
//Sign up with invalid email format
When('I fill in the email field with an invalid format and a weak password', () => {
    commonElements.emailInput().type('qwerty')
    commonElements.passwordInput().type('123')
})
And('I fill in the other fields correctly', () => {
    pageElements.usernameInput().type(generatedUsername)
})
Then('I should see an error message indicating that the email is invalid and password is weak', () => {
    cy.contains('Erro').should('be.visible')
})
