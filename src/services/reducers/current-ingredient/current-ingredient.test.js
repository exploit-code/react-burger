import * as types from "../../constants/current-ingredient";
import { currentIngredient, initialState } from "./current-ingredient";

describe("test reducer currentIngredient", () => {
  it("should return the initial state", () => {
    expect(currentIngredient(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_CURRENT_INGREDIENT", () => {
    const mockIngredient = {
      _id: "_id",
      name: "name",
      type: "type",
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: "src",
      image_mobile: "src",
      image_large: "src",
      __v: 0,
    };

    const expectedState = {
      ingredient: mockIngredient,
    };

    expect(
      currentIngredient(undefined, { type: types.SET_CURRENT_INGREDIENT, payload: mockIngredient })
    ).toEqual(expectedState);
  });
});
