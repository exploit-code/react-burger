describe("Testing the opening of a modal window", () => {
  before("should be available on localhost:3000", () => {
    cy.visit("http://localhost:3000");
  });

  it("Opens a modal window with a description of the ingredient", () => {
    cy.get('[draggable="true"]:first').click();
    cy.get(".modal_modal__head__jYvRS h2").contains("Детали ингредиента");
  });
});
