

class productPage {

    get cartLink() {
        return cy.get('.shopping_cart_link')
    }
    get checkout() {
        return cy.get('#checkout')
    }
    product(product) {
        return cy.get(`#add-to-cart-sauce-labs-${product}`)
    }
    selectRandomProduct(randNum) {
        return cy.get(`div.inventory_list>div:nth-child(${randNum})>div:nth-child(2)>div:nth-child(2)>button)`)
    }
    get sortbutton() {
        return cy.get('.product_sort_container')
    }
    get getproductTitleList() {
        return cy.get('.inventory_item_name')
    } 
    get addToCartButton() {
        return cy.get('button').contains('Add to cart')
    }
    getRandomInt() {
        min = Math.ceil(1);
        max = Math.floor(6);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }
}
module.exports = new productPage()