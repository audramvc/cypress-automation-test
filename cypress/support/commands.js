// Login user
Cypress.Commands.add("singup", (username, email, password) => {
    cy.visit("/signup");
    cy.get("#username").type(username);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get('#confirmPassword').type(password);
    cy.get("#loginButton").click();
  });

  // Login
  Cypress.Commands.add("login", (email, password) => {
    cy.visit("/login");
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
  });

  // Logout user
  Cypress.Commands.add('logout', () => {
    cy.get('#logout-button').click(); 
    cy.contains('You have been logged out').should('be.visible'); // Verify logout message
  });

  // Add item to cart command
Cypress.Commands.add("addItem", (productName) => {
  cy.visit("/shop");
  cy.get('.product').contains(productName).click();
  cy.get('#add-to-cart').click();
});

// Checkout process command
Cypress.Commands.add("checkout", (shippingInfo) => {
  cy.get('#cart').click();
  cy.get('#checkout').click();
  cy.get('#shipping-address').type(shippingInfo.address);
  cy.get('#shipping-city').type(shippingInfo.city);
  cy.get('#shipping-zip').type(shippingInfo.zip);
  cy.get('#place-order').click();
});