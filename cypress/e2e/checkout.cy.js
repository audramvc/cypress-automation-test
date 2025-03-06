describe('Checkout Process', () => {
    it('should complete the checkout successfully', function() {
      const shippingInfo = {
        address: '123 Main St',
        city: 'New York',
        zip: '10001'
      };
      cy.checkout(shippingInfo);
      cy.contains('Order placed successfully').should('be.visible');
    });
  });