/// <reference types="cypress"/>
import * as POSTuser from '../../../integration/signup/requests/POSTDuplicateUser.request.js';


context('POST User', () => {
  it('Register a duplicate user', () => {       
    POSTuser.registerUser().should((response) => {
      expect(response.status).to.equal(422);
      expect(response.body.errors.email).to.contains('has already been taken');
      expect(response.body.errors.username).to.contains('has already been taken');  
    
    })
  })
})    