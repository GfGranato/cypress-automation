const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    nonGlobalStepDefinitions: true,
    specPattern: "cypress/e2e/features/*.feature",
    stepDefinitions: ["cypress\\e2e\\*.js", "cypress\\e2e\\support\\step_definitions\\*.js"],
    setupNodeEvents,
    baseUrl: 'https://nightwatchjs.org/',
  },
});