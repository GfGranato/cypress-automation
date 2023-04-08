const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const {nightwatchLogo, versionDropDown, listVersions, linkAPI} = require('.\\mapping\\landingPage.js')
const {sesearchBar, inputSearch} = require('.\\mapping\\apiGuide.js')
    
Given("the user access the application", () => {
    cy.visit('/')
})

Then('the nightwatch logo should be visible', () => {
    cy.get(nightwatchLogo).should('be.visible')
    
})  
Then('the version should be the Latest', () => {
    cy.get(versionDropDown).click()
    cy.get(listVersions).first().should('have.text', 'Latest')
})

When('access the API page', () => {
    cy.get(linkAPI).first(). click()
})

When('searchs for {string}', (search) => {
    cy.get(searchBar).click()
    cy.get(inputSearch).type(search + KEYS.Enter)
})

Then('the url should contains "guide/extending-nightwatch/adding-custom-assertions.html#guide-container"', (url) => {
    cy.url().should('include', url)
    
})