/// <reference types="cypress"/>
import * as POSTLogin from '../../../integration/signin/requests/POSTSInvalidUser.request.js';


context('POST User', () => {
  it('Log in as invalid user', () => {       
    POSTLogin.loginInvalidUser().should((response) => {
      expect(response.status).to.equal(403);
      expect(response.body.errors).to.have.property('email or password').contains('is invalid');    
    })
  })
})    