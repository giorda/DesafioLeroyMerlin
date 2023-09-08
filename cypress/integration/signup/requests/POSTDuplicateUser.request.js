/// <reference types="cypress" />
const payloadUser = require('../payloads/duplicate-user.json');


 function registerUser() {
  return cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users',
        failOnStatusCode: false,
        body: payloadUser
    })
}

export { registerUser };

