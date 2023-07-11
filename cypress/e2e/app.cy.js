describe("Counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should increase the count by 10 and display toast message", () => {
    cy.get(".count-text").should("contain", "Count: 0");

    // Increase the count by 10
    for (let i = 0; i < 10; i++) {
      cy.get(".action-button").contains("Increase").click();
    }

    cy.get(".count-text").should("contain", "Count: 10");

    // Click Increase button one more time
    cy.get(".action-button").contains("Increase").click();

    // Verify toast message
    cy.contains("Count cannot exceed 10").should("be.visible");
  });

  it("should reset the count to 0", () => {
    // Set the count to 0
    cy.get(".count-text").should("contain", "Count: 0");

    // Increase the count by 5
    for (let i = 0; i < 5; i++) {
      cy.get(".action-button").contains("Increase").click();
    }

    // Click Reset button
    cy.get(".action-button").contains("Reset").click();

    // Verify count is reset to 0
    cy.get(".count-text").should("contain", "Count: 0");
  });

  it("should decrease the count by 10 and display toast message", () => {
    // Set the count to 0
    cy.get(".count-text").should("contain", "Count: 0");

    // Click Decrease button one more time
    cy.get(".action-button").contains("Decrease").click();

    // Verify toast message
    cy.contains("Count cannot decrese bellow 0").should("be.visible");
  });
});
