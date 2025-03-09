describe('Login and Logout', () => {
  beforeEach(function() {
    cy.fixture('userData').then((data) => {
      this.user = data.validUser; // Store user data in `this.user` to use in the test
    });
  });

  it('should login and logout successfully', function() {
    cy.log('User data', this.user);
    cy.login(this.user);
    cy.logout(); // Perform logout action
  });
});
  