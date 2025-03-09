// Register user
Cypress.Commands.add("register", (user) => {
  cy.visit("/signup");
  cy.get('form').find('[name="name"]',{timeout: 10000}).first().type(user.name);
  cy.get('[data-qa="signup-email"]').first().type(user.email);
  cy.get('[data-qa="signup-button"]').first().should('be.visible').click();
  cy.get('[type="password"]',{timeout: 10000}).should('be.visible').type(user.password);
  const [year, month, day] = user.dob.split('-');

  // Select day, month, and year in dropdowns
  cy.get('#days').should('be.visible').select(day.replace(/^0/, '')); // Remove leading zero if present
  cy.get('#months').should('be.visible').select(parseInt(month) - 1); // Month dropdowns often start from 0 (January)
  cy.get('#years').should('be.visible').select(year);
  cy.get("#first_name").should('be.visible').type(user.firstName);
  cy.get('#last_name').should('be.visible').type(user.lastName);
  cy.get('[name="address1"]').type(user.address);
  cy.get('#country').should('exist').select(user.country);
  cy.get('#state').type(user.state);
  cy.get('#city').type(user.city);
  cy.get('#zipcode').type(user.zip);
  cy.get('#mobile_number').type(user.mobileNumber);
  cy.get('[data-qa="create-account"]').first().should('be.visible').click();
  //cy.get('.success-message').should('contain', 'Account Created Successfully');
  
});

  // Login
  Cypress.Commands.add("login", (user) => {
    cy.visit("/login");
    cy.log("Log in with:", user);
    cy.get('[data-qa="login-email"]').first().type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);
    cy.get('[data-qa="login-button"]').click();
  });

// Logout command
Cypress.Commands.add('logout', () => {
  cy.get('a[href="/logout"]', { timeout: 10000 }).click();
});

  // Add item to cart command
  Cypress.Commands.add("addItemToCart", (productName) => {
    cy.get('body').then((body) => {
      console.log(body.text());
    });
    cy.get('.product', {timeout: 10000}).contains(productName).click();
  
    // Click the "Add to Cart" button
    cy.get('[class="btn btn-default add-to-cart"]').should('be.visible').click();
  });

// Checkout process command
//Cypress.Commands.add("addItemToCart", (shippingInfo) => {
  //cy.get('#cart').click();
  //cy.get('#checkout').click();
  //cy.get('#shipping-address').type(shippingInfo.address);
 //cy.get('#shipping-city').type(shippingInfo.city);
 // cy.get('#shipping-zip').type(shippingInfo.zip);
 //cy.get('#place-order').click();
//});