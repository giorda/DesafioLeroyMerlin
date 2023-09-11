class signUpPage {
    signUpPage() {
        return cy.visit('/register')
    }
    usernameInput() {
        return cy.get('[placeholder = "Username"]')
    }
    signUpButton() {
        return cy.get('button')
    }
    userIcon() {
        return cy.get('.user-pic')
    }
    emailExistingMessage() {
        return cy.contains(' email has already been taken ')
    }
    usernameExistingMessage() {
        return cy.contains(' username has already been taken ')
    }
}
export default signUpPage