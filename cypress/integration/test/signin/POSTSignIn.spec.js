/// <reference types="cypress"/>
import * as POSTLogin from '../../../integration/signin/requests/POSTSignIn.request.js';


context('POST User', () => {
  it('Log in as registered user', () => {       
    POSTLogin.loginUser().should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.user.email).to.equal('teste2608@teste.com');    
    })
  })
})    