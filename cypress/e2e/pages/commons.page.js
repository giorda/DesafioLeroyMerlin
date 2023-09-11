class commonsPage{
    loginPage() {
        return cy.visit('/login')
    }
    passwordInput() {
        return cy.get('[placeholder = "Password"]')
    }
    emailInput() {
        return cy.get('[placeholder = "Email"]')
    }
    signInButton() {
        return cy.get('[type="submit"]')
    }
}
export default commonsPage