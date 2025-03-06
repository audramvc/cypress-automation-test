describe('Error Handling', () => {
    it('should show an error for invalid login', function() {
      cy.login('invalidemail@example.com', 'invalidpassword');
      cy.contains('Invalid credentials').should('be.visible');
    });
  });