/// <reference types="cypress"/>
const loginData = require("../data/saucelabsLoginData")
const loginPage = require('../pageobjects/login.page')

describe('Data-driven login', () => {


    for(const user of loginData) {
        it(`Should attempt to login ${user.username}`, () => {
            // before runing each test pull up the base url for the site.
            cy.visit('/')

            // enter all the information for the login page and submit.
            loginPage.userInput.type(user.username);
            loginPage.passwordInput.type(user.password);
            loginPage.loginButton.click();

            //check the type of user to make the correct assertion.
            if(!(user.username === "standard_user"|| user.username === "problem_user")) {
                cy.url().should('contain',user.expected_url)
                loginPage.loginError.should('contain',user.expected_error)
            }else {
                cy.url().should('contain',user.expected_url)
            }
        })
    }
    

})