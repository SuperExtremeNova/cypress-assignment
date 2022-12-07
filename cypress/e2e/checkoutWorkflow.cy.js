/// <reference types="cypress" />

const loginData = require("../data/saucelabsLoginData")
const loginPage = require('../pageobjects/login.page')
const productPage = require('../pageobjects/product.page')
const cartPage = require('../pageobjects/cart.page')
const checkoutPage = require('../pageobjects/checkout.page')
const {faker} = require('@faker-js/faker')

const productName = 'bike-light';

describe('Checkout WorkFlow', () => {

    beforeEach(()=>{
        cy.visit('/')
        loginPage.userInput.type(loginData[0].username)
        loginPage.passwordInput.type(loginData[0].password)
        loginPage.loginButton.click()
    })

    it('should add a single item to the card and proceed checkout', () => {
        const randomNumber = productPage.getRandomInt

        cy.url().should('contain',loginData[0].expected_url) 

        //productPage.selectRandomProduct(randomNumber).click()
        productPage.addToCartButton.get()
        productPage.addToCartButton.click()
        productPage.cartLink.click()
        cy.url().should('contain','https://www.saucedemo.com/cart.html')

        cartPage.checkout.click()
        cy.url().should('contain','https://www.saucedemo.com/checkout-step-one.html')

        checkoutPage.fnInput.type(faker.name.firstName())
        checkoutPage.lnInput.type(faker.name.lastName())
        checkoutPage.zipInput.type(faker.address.zipCode())

        checkoutPage.continue.click()

        checkoutPage.inventoryItem.contains(productName,{matchCase:false}).should('exist')
        checkoutPage.finish.click()

        checkoutPage.completeMsg.should('exist')

    });

    it('should remove item from cart and add back from list', () => {

        productPage.addToCartButton.click()
        productPage.cartLink.click()

        cy.url().should('contain','https://www.saucedemo.com/cart.html')
        cartPage.button.contains('remove',{matchCase:false}).should('exist')
        
        cartPage.button.contains('remove',{matchCase:false}).click()
        cartPage.continue.click()

        cy.url().should('contain','https://www.saucedemo.com/inventory.html')
        productPage.addToCartButton.click()
        cartPage.button.contains('remove',{matchCase:false}).click()

    })

    it('should sort the products a-z on the product page',() => {
        const sortedItems = ['backpack', 'bike light', 'bolt t-shirt', 'fleece jacket', 'onesie', 't-shirt (red)']

        productPage.sortbutton.select('az')

        productPage.getproductTitleList.each(($el, index, $list) => {
            
            cy.wrap($el).contains(sortedItems[index],{matchCase:false})
            .should('exist')
            
        })

    })

    it('should sort the products z-a on the product page',() => {
        const sortedItems = ['backpack', 'bike light', 'bolt t-shirt', 'fleece jacket', 'onesie', 't-shirt (red)']
        const revSortedItems = sortedItems.reverse();
        productPage.sortbutton.select('za')

        productPage.getproductTitleList.each(($el, index, $list) => {
            
            cy.wrap($el).contains(revSortedItems[index],{matchCase:false})
            .should('exist')
            
        })

    })

    it('should sort the products low-high price on the product page',() => {
        const sortedItems = ['onesie', 'bike light', 'bolt t-shirt', 't-shirt (red)', 'backpack', 'fleece jacket']
        productPage.sortbutton.select('lohi')

        productPage.getproductTitleList.each(($el, index, $list) => {
            
            cy.wrap($el).contains(sortedItems[index],{matchCase:false})
            .should('exist')
            
        })

    })

    it('should sort the products high-low price on the product page',() => {
        const sortedItems = ['onesie', 'bike light', 't-shirt (red)', 'bolt t-shirt', 'backpack', 'fleece jacket']
        const revSortedItems = sortedItems.reverse();
        productPage.sortbutton.select('hilo')

        productPage.getproductTitleList.each(($el, index, $list) => {
            
            cy.wrap($el).contains(revSortedItems[index],{matchCase:false})
            .should('exist')
            
        })

    })

})