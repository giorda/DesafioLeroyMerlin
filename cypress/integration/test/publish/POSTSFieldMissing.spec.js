/// <reference types="cypress"/>
import * as POSTArticle from '../../../integration/publish/requests/POSTFieldMissing.request';


context('POST Article', () => {
  it('Publish a new article with missing fields', () => {       
    POSTArticle.publishArticle().should((response) => {
      expect(response.status).to.equal(422);
      expect(response.body.errors).to.have.property('title').contains("can't be blank");      
    
    })
  })
})    

