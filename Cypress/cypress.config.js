const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'results',
      reportFilename: 'report',
      quiet: true,
      overwrite: false,
      html: true,
      json: true
  },
},
});
