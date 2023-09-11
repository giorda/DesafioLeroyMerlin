
class signInPage {
    
    userName() {
        return cy.contains('Teste260823')
    }
    emailPasswordInvalidMessage() {
        return cy.contains('email or password is invalid')
    }
}
export default signInPage