const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import {nightwatchLogo, versionDropDown, listVersions, linkAPI} from '../mapping/landingPage.js'
import {searchBar, inputSearch, firstSearchedElement} from '../mapping/apiGuide.js'
    
Given("the user access the application", () => {
    cy.visit('/')
})

Then('the nightwatch logo should be visible', () => {
    cy.get(nightwatchLogo).should('be.visible')
    
})  
Then('the version should be the Latest', () => {
    cy.get(versionDropDown).click()
    cy.get(listVersions).first().should('contain.text', 'Latest')
})

When('access the API page', () => {
    cy.get(linkAPI).first(). click()
})

When('searches for {string}', (search) => {
    cy.get(searchBar).click()
    cy.get(inputSearch).type(search)
    cy.get(firstSearchedElement).should('contain.text', search)
    
})
