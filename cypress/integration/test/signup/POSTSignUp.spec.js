/// <reference types="cypress"/>
import * as POSTuser from '../../../integration/signup/requests/POSTSignUp.request.js';


context('POST User', () => {
  it('Register a new user', () => {       
    POSTuser.registerUser().should((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.user.email).to.equal(POSTuser.emailValue);
      expect(response.body.user.username).to.equal(POSTuser.usernameValue);  
    
    })
  })
})    