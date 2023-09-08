/// <reference types="cypress"/>
import * as POSTArticle from '../../../integration/publish/requests/POSTDuplicateTitle.request.js';


context('POST Article', () => {
  it('Publish a duplicate article', () => { 
    POSTArticle.publishArticle().should((response) => {
      expect(response.status).to.equal(422);
      expect(response.body.errors).to.have.property('title').contains("must be unique"); 
    })
  })
})    

