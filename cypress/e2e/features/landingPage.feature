Feature: Landing Page
    As a user
    I want to access the site
    So I will see the cards and access them

    Background: Access application
        Given the user access the application

    Scenario: Validate Nightwatch Landing page
        Then the nightwatch logo should be visible
        And the version should be the Latest

    Scenario: Validate API search bar
        When access the API page
        Then searches for "Define custom assertions"
