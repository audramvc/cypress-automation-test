describe('User Registration', () => {
  it('should register a new user successfully', function() {
    cy.fixture('userData').then((data) => {
      const user = data.validUser; 
      cy.register(user); // Pass the full user object to the register command
      //cy.contains('Address Information').should('be.visible');
    });
  });
});