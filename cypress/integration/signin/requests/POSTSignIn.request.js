/// <reference types="cypress" />
const payloadUser = require ('../payloads/user-login.json')


 function loginUser() {
  return cy.request({
        method: 'POST',
        url: 'https://api.realworld.io/api/users/login',
        failOnStatusCode: false,
        body: payloadUser
    })
}

export { loginUser };

