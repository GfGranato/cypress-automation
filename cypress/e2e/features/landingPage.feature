Feature: Landing Page
    As a user 
    I want to access the site
    So I will see the cards and access them

 
    Scenario: Validate the 22 cards 
        Given the user access the application
        Then he should sees 22 cards
        And the "QA Playground" logo should be visible 

     Scenario: Validate Dynamic Table redirect 
        Given the user access the application
        When clicks the "Dynamic Table" card
        Then the url should be "apps/dynamic-table/"
        And the "Spider-Man" should be in table
        
        
    