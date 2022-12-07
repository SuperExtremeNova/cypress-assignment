/// <reference types="cypress" />


class loginPage {

    get userInput() {
        return cy.get('#user-name');
    }

    get passwordInput() {
        return cy.get('#password')
    }

    get loginError() {
        return cy.get('div.error')
    }

    get loginButton() {
        return cy.get('#login-button')
    }
    
    open () {
        cy.url('/');
    }

}

module.exports = new loginPage();
