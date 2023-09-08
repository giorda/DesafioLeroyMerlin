/// <reference types="cypress"/>
import * as DELETEArticle from '../../delete/requests/DELETEArticle.request.js';
import * as POSTArticle from '../../publish/requests/POSTPublish.request.js';


context('DELETE Article', () => {
  it('Delete an article', () => { 
    POSTArticle.publishArticle();
    DELETEArticle.deleteArticle(POSTArticle.titleValue).should((response) => {
      expect(response.status).to.equal(204);        
    })
  })
})    

