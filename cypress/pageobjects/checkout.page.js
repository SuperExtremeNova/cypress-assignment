

class checkoutPage {

    get fnInput() {
        return cy.get('#first-name')
    }
    get lnInput() {
        return cy.get('#last-name')
    }
    get zipInput() {
        return cy.get('#postal-code')
    }
    get error() {
        return cy.get('#error-message-container')
    }
    get inventoryItem() {
        return cy.get('.inventory_item_name')
    }
    get continue() {
        return cy.get('#continue')
    }
    get finish() {
        return cy.get('#finish')
    }
    get completeMsg() {
        return cy.get('.header_secondary_container')
    }
}
module.exports = new checkoutPage()