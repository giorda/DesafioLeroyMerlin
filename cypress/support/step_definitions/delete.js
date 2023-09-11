import { Then, When } from 'cypress-cucumber-preprocessor/steps';
import deletePage from '../../e2e/pages/delete.page.js';
import { publishArticle } from '../../integration/publish/requests/POSTPublish.request';
const pageElements = new deletePage()


When('I navigate to the "Profile" page', () => {
    publishArticle()
    pageElements.profilePage()
    cy.wait(2000)     
})
And('I select the article', () => {    
    pageElements.articleLink().first().click()
})
And('I click the "Delete" button', (table) => {
    pageElements.deleteButton().click()
})
Then('I should be redirected to feed', () => {
    pageElements.feedPage()
})
