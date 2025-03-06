describe('Login and Logout', () => {
    it('should login and logout successfully', function() {
      cy.fixture('userData').then((user) => {
        cy.login(user.email, user.password);
        cy.url().should('include', '/dashboard');
        cy.logout();
      });
    });
  });
  