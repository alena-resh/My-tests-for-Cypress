const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // e2e:  {
  //     baseUrl: "https://example.cypress.io/commands/actions",
  //   },
  env: {
    navbarText: "cypress.io",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
