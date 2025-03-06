describe('Add Item to Cart', () => {
    it('should add a product to the cart', function() {
      cy.addItemToCart('Product Name');
      cy.get('.cart').click();
      cy.contains('Product Name').should('be.visible');
    });
  });