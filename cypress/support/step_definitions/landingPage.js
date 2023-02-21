const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given("the user access the application", () => {
    cy.visit('/')
})

Then('he should sees {int} cards', (num) => {
    cy.get('div[class="card-content"]').should('have.length', num)
})

Then('the {string} logo should be visible', (text) => {
    cy.get('span[class="gradient-text"]').contains(text).should('be.visible')
})

When('clicks the {string} card', (text) => {
   cy.get('a[class="card card-course"] >div> h3').contains(text).click()
})

Then('the url should be {string}', (url) => {
    cy.url().should('contain',url)
})

Then('the {string} should be in table', (hero) => {
    cy.get('tr>td>div').contains(hero).should('be.visible')
})