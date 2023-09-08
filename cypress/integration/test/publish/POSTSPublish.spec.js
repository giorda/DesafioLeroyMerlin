/// <reference types="cypress"/>
import * as POSTArticle from '../../../integration/publish/requests/POSTPublish.request.js';


context('POST Article', () => {
  it('Publish a new article', () => {       
    POSTArticle.publishArticle().should((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.article.title).to.equal(POSTArticle.titleValue);
      expect(response.body.article.title).to.equal(POSTArticle.bodyValue);
      expect(response.body.article.title).to.equal(POSTArticle.descriptionValue);
      expect(response.body.article.title).to.equal(POSTArticle.tagsValue);
        
    
    })
  })
})    

