describe('Add Item to Cart', () => {
  beforeEach(function() {  
    // Load the fixture data and store it in this.productData
    cy.fixture('products').then((data) => {
      this.productData = data.product;  // Use the correct path to the product data
    });
  });

  it('should search for a product, add it to the cart, and validate the correct item is added', function() {
    // Make sure productData is loaded
    const productName = this.productData.name; // Access product name
    cy.addItemToCart(productName); // Pass the product name to the addItemToCart function
    cy.get('[data-qa="cart-items"]').should('contain', productName); // Check if the product is added to the cart
  });
});