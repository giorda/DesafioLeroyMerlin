/// <reference types="cypress" />
const payloadUser = require ('../payloads/invalid-user-login.json')


 function loginInvalidUser() {
  return cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login',
        failOnStatusCode: false,
        body: payloadUser
    })
}

export { loginInvalidUser };

