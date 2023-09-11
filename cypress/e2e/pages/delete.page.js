
class deletePage {
    profilePage() {
        return cy.visit('/profile/Teste260823')
    }
    articleLink() {
        return cy.get('.article-preview')
    }
    deleteButton() {
        return cy.contains(' Delete Article ')
    }
    feedPage() {
        return cy.contains(' Global Feed ')
    }
}
export default deletePage
