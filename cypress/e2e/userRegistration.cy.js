describe('User Registration', () => {
  it('should register a new user successfully', function() {
    cy.fixture('userData').then((user) => {
      cy.register(user.username, user.email, user.password);
      cy.contains('Registration successful').should('be.visible');
    });
  });
});