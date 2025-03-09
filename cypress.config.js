const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://automationexercise.com",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js", 
   // env: {
        //admin_email: "admin@automationexercise.com",
       // admin_password: "admin123"
   // }
  },
});
