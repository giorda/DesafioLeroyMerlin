/// <reference types="cypress" />
const userValues = require('../../../support/random.js');

var emailValue = userValues.generatedEmail;
var usernameValue = userValues.generatedUsername;
var passwordValue = userValues.generatedPassword;

function registerUser() {
return cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users',
        failOnStatusCode: false,
        body: {
            user: {
                email: emailValue,
                password: passwordValue,
                username: usernameValue
            }
        }
    })
}

export { emailValue, passwordValue, registerUser, usernameValue };
