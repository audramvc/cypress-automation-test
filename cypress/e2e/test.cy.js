describe("Test", () => {
    it("Visits the homepage", () => {
      cy.visit("https://automationexercise.com");
      cy.contains("Welcome").should("be.visible");
    });
  });