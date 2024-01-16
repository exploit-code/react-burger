import { initialState, burgerConstructor } from "./burger-constructor";
import * as types from "../../constants/burger-constructor";

describe("test reducer burgerConstructor", () => {
  it("should return the initial state", () => {
    expect(burgerConstructor(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_INGREDIENT for buns", () => {
    const bun = { _id: "1", type: "bun" };
    const action = { type: types.ADD_INGREDIENT, payload: bun };
    const nextState = burgerConstructor(undefined, action);
    expect(nextState).toEqual({ bun, ingredients: [] });
  });

  it("should handle ADD_INGREDIENT for ingredients", () => {
    const ingredient = { _id: "2", type: "main" };
    const action = { type: types.ADD_INGREDIENT, payload: ingredient };
    const nextState = burgerConstructor(undefined, action);
    expect(nextState).toEqual({ bun: null, ingredients: [ingredient] });
  });

  it("should handle REMOVE_INGREDIENT", () => {
    const initialState = { bun: null, ingredients: [{ _id: "1", type: "main" }] };
    const action = { type: types.REMOVE_INGREDIENT, payload: { _id: "1" } };
    const nextState = burgerConstructor(initialState, action);
    expect(nextState).toEqual({ bun: null, ingredients: [] });
  });

  it("should handle REMOVE_ALL_INGREDIENTS", () => {
    const currentState = {
      bun: { _id: "1", type: "bun" },
      ingredients: [{ _id: "2", type: "main" }],
    };
    const action = { type: types.REMOVE_ALL_INGREDIENTS };
    const nextState = burgerConstructor(currentState, action);
    expect(nextState).toEqual(initialState);
  });

  it("should handle MOVE_INGREDIENT", () => {
    const initialState = {
      bun: null,
      ingredients: [
        { _id: "1", type: "main" },
        { _id: "2", type: "main" },
      ],
    };
    const action = { type: types.MOVE_INGREDIENT, payload: { fromIndex: 0, toIndex: 1 } };
    const nextState = burgerConstructor(initialState, action);
    expect(nextState).toEqual({
      bun: null,
      ingredients: [
        { _id: "2", type: "main" },
        { _id: "1", type: "main" },
      ],
    });
  });

  it("should handle ADD_INGREDIENT for an existing bun", () => {
    const initialStateWithBun = { bun: { _id: "1", type: "bun" }, ingredients: [] };
    const ingredient = { _id: "2", type: "bun" };
    const action = { type: types.ADD_INGREDIENT, payload: ingredient };
    const nextState = burgerConstructor(initialStateWithBun, action);
    expect(nextState).toEqual({ bun: ingredient, ingredients: [] });
  });

  it("should handle ADD_INGREDIENT for an existing ingredient", () => {
    const initialStateWithIngredient = { bun: null, ingredients: [{ _id: "1", type: "main" }] };
    const ingredient = { _id: "2", type: "main" };
    const action = { type: types.ADD_INGREDIENT, payload: ingredient };
    const nextState = burgerConstructor(initialStateWithIngredient, action);
    expect(nextState).toEqual({
      bun: null,
      ingredients: [
        { _id: "1", type: "main" },
        { _id: "2", type: "main" },
      ],
    });
  });

  it("should handle REMOVE_INGREDIENT for a non-existing ingredient", () => {
    const initialStateWithoutIngredient = { bun: null, ingredients: [] };
    const action = { type: types.REMOVE_INGREDIENT, payload: { _id: "1" } };
    const nextState = burgerConstructor(initialStateWithoutIngredient, action);
    expect(nextState).toEqual(initialStateWithoutIngredient);
  });
});
