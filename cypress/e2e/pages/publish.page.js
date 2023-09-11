
class publishPage {
    
    editorLink() {
        return cy.visit('/editor')
    }
    titleInput() {
        return cy.get('[formcontrolname="title"]')
    }
    descriptionInput() {
        return cy.get('[formcontrolname="description"]')
    }
    bodyInput() {
        return cy.get('[formcontrolname="body"]')
    }
    tagsInput() {
        return cy.get('[placeholder="Enter tags"]')
    }
    publishButton() {
        return cy.get('[type="button"]')
    }
    articlePage() {
        return cy.get('.article-page')
    }
    titleExistingMessage() {
        return cy.contains(' title must be unique ')
    }
    errorMessage() {
        return cy.get('.error-messages')
    }
}
export default publishPage
