# cypress-automation
### WIP

This project seeks to automate your website using [Cypress](https://cypress.io) and JavaScript.\
For the automation I choose to use [Cucumber](https://cucumber.io) to document the Scenarios.\
The main branch contains the core functionality of the project, while other branches will be created for specific test cases.

## **Prerequisites**
Google Chrome, Mozilla Firefox or Edge browser Firefox installed

## **Installation**
The version of browser is automatically configured by cypress. So, execute the following command:
 ``` 
 npm install
 ``` 
 to download the dependencies 

## **How to Use**
To execute the automation, you can run the command:
```
npm run cy:spec
```
to execute all .feature files without opening the browser or
```
npm run cy:open
```
to open the cypress and look the automation runing

## **Architecture**
The architecture selected for the project is Page Object model.\
The scenarios are located in the [cypress/e2e/features](cypress\e2e\features) folder, while the steps are located in the [cypress/support/step_definitions](cypress\support\step_definitions) folder. The mapped elements are located in the [cypress/support/mapping](cypress\support\mapping) folder.

## **Contributing**
Please feel free to leave comments on my social media and email me to suggest improvements for this framework's performance and organization.

## **License**
Copyright © 2023 [Guilherme Granato](https://github.com/GfGranato) \
This project is MIT licensed

## **Author**
Guilherme Granato \
 [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/guilherme-granato/)
 [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/GfGranato/)

## **Acknowledgments**
This project helped me to learn more about how to use cypress for E2E tests.
Feel free to use it in your own projects