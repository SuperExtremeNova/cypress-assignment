

class cartPage {

    get cartLink() {
        return cy.get('.shopping_cart_link')
    }
    get checkout() {
        return cy.get('#checkout')
    }
    get button() {
        return cy.get('button')
    }
    get continue() {
        return cy.get('#continue-shopping')
    }

}
module.exports = new cartPage()