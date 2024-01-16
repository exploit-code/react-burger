import { BASE_URL } from "../../src/utils/api";

describe("test modal", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should opening and closing a modal window with ingredient", () => {
    cy.get('[data-testid="643d69a5c3f7b9001cfa093c"]').click();
    cy.get('[data-testid="modal"]').contains("Детали ингредиента");
    cy.url().should("include", "/ingredients/643d69a5c3f7b9001cfa093c");
    cy.get('[data-testid="ingredient_params"]').contains("Краторная булка N-200i");
    cy.get('[data-testid="close_button"]').click();
    cy.get('[data-testid="modal"]').should("not.exist");
  });
});

describe("test dnd and order request", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get('[data-testid="email"]').should("exist").type("email@mail.ru");
    cy.get('[data-testid="password"]').should("exist").type("password");
    cy.get('[data-testid="submit"]').should("exist").click();
    cy.intercept("POST", `${BASE_URL}auth/login`, { fixture: "user-response.json" }).as(
      "loginResponse"
    );
    cy.wait("@loginResponse");
  });

  it("should dnd, order request and open modal", () => {
    cy.visit("/");
    cy.get('[data-testid="643d69a5c3f7b9001cfa093c"]').as("bun");
    cy.get('[data-testid="643d69a5c3f7b9001cfa0941"]').as("ingredient");
    cy.get('[data-testid="burger_constructor"]').as("constructor");

    cy.get("@bun").trigger("dragstart");
    cy.get("@constructor").trigger("dragenter").trigger("drop");

    cy.get('[data-testid="burger_constructor__bun_top"] [data-testid="top"]').should(
      "contain",
      "Краторная булка N-200i (верх)"
    );
    cy.get('[data-testid="burger_constructor__bun_bottom"] [data-testid="bottom"]').should(
      "contain",
      "Краторная булка N-200i (низ)"
    );

    cy.get("@ingredient").trigger("dragstart");
    cy.get("@constructor").trigger("dragenter").trigger("drop");

    cy.get(
      '[data-testid="burger_constructor__ingredients"] [data-testid="643d69a5c3f7b9001cfa0941"]'
    ).should("contain", "Биокотлета из марсианской Магнолии");

    cy.get('[data-testid="checkout_button"]').should("exist").contains("Оформить заказ").click();
    cy.intercept("POST", `${BASE_URL}orders`, { fixture: "order-response.json" }).as(
      "orderResponse"
    );
    cy.wait("@orderResponse");

    cy.get('[data-testid="modal"]').should("exist");
    cy.get('[data-testid="1111"]').contains("1111");
  });
});
