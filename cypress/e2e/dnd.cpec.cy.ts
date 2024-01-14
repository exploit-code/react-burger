describe("test dnd", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(500);
  });

  it("handle bun drag", () => {
    cy.get("[draggable='true']:nth(0)").as("bunDrag");
    cy.get(".burger-constructor_burger_constructor__combine__NMgcx").as("combineDropBox");

    cy.get("@bunDrag").trigger("dragstart");
    cy.get("@combineDropBox").trigger("dragenter").trigger("drop");

    cy.get(".burger-constructor_burger_constructor__bun_top__OUuAX > div")
      .contains("Краторная булка N-200i (верх)")
      .should(($div) => {
        expect($div).to.have.length.of.at.least(1);
      });
    cy.get(".burger-constructor_burger_constructor__bun_bottom__s0w6c > div")
      .contains("Краторная булка N-200i (низ)")
      .should(($div) => {
        expect($div).to.have.length.of.at.least(1);
      });

    cy.get('[draggable="true"]:nth(1)').as("bunDrag");
    cy.get(".burger-constructor_burger_constructor__combine__NMgcx").as("combineDropBox");

    cy.get("@bunDrag").trigger("dragstart");
    cy.get("@combineDropBox").trigger("dragenter").trigger("drop");

    cy.get(".burger-constructor_burger_constructor__bun_top__OUuAX > div")
      .contains("Флюоресцентная булка R2-D3 (верх)")
      .should(($div) => {
        expect($div).to.have.length.of.at.least(1);
      });
    cy.get(".burger-constructor_burger_constructor__bun_bottom__s0w6c > div")
      .contains("Флюоресцентная булка R2-D3 (низ)")
      .should(($div) => {
        expect($div).to.have.length.of.at.least(1);
      });

    cy.get("[draggable='true']:nth(6)").as("ingredientDrag");
    cy.get(".burger-constructor_burger_constructor__combine__NMgcx").as("combineDropBox");

    cy.get("@ingredientDrag").trigger("dragstart");
    cy.get("@combineDropBox").trigger("dragenter").trigger("drop");

    cy.get(".burger-constructor_burger_constructor__ingredients__EsuHo > li")
      .contains("Биокотлета из марсианской Магнолии")
      .should(($div) => {
        expect($div).to.have.length.of.at.least(1);
      });

    cy.get("[draggable='true']:nth(7)").as("ingredientDrag");
    cy.get(".burger-constructor_burger_constructor__combine__NMgcx").as("combineDropBox");

    cy.get("@ingredientDrag").trigger("dragstart");
    cy.get("@combineDropBox").trigger("dragenter").trigger("drop");

    cy.get(".burger-constructor_burger_constructor__ingredients__EsuHo > li")
      .contains("Филе Люминесцентного тетраодонтимформа")
      .should(($div) => {
        expect($div).to.have.length.of.at.least(1);
      });
  });
});
