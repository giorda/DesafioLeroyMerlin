import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import commonsPage from '../../e2e/pages/commons.page.js';
import signInPage from '../../e2e/pages/signin.page.js';
const pageElements = new signInPage();
const commonElements = new commonsPage();

//Background
Given('I am on the sign-in page', () => {
    commonElements.loginPage();   
})

//Successful sign in
When('I fill in the sign-in form with valid credentials', (table) => {
    table.hashes().forEach(row => {
        commonElements.emailInput().type(row.email)
        commonElements.passwordInput().type(row.password)        
    })
    
})
And('I click the "Sign In" button', () => {
    commonElements.signInButton().click()
})
Then('I should be redirected to home page', () => {
    pageElements.userName().should('be.visible')
})

//Sign in with invalid credentials
When('I fill in the sign-in form with invalid credentials', (table) => {
    table.hashes().forEach(row => {
        commonElements.emailInput().type(row.email)
        commonElements.passwordInput().type(row.password)        
    })
})

Then('I should see an error message indicating that the credentials are incorrect', () => {
    pageElements.emailPasswordInvalidMessage().should('be.visible');
})