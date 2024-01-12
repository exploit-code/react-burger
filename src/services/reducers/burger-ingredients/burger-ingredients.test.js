import { initialState, burgerIngredients } from "./burger-ingredients";
import * as types from "../../constants/burger-ingredients";

describe("test reducer burgerIngredients", () => {
  it("should return the initial state", () => {
    expect(burgerIngredients(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    const expectedState = {
      data: [],
      loading: true,
      error: false,
    };

    expect(burgerIngredients(undefined, { type: types.GET_INGREDIENTS_REQUEST })).toEqual(
      expectedState
    );
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    const mockIngredients = {
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
      data: [mockIngredients],
      loading: false,
      error: false,
    };

    expect(
      burgerIngredients(undefined, {
        type: types.GET_INGREDIENTS_SUCCESS,
        payload: { data: [mockIngredients] },
      })
    ).toEqual(expectedState);
  });

  it("should handle GET_INGREDIENTS_ERROR", () => {
    const expectedState = {
      data: [],
      loading: false,
      error: true,
    };

    expect(burgerIngredients(undefined, { type: types.GET_INGREDIENTS_ERROR })).toEqual(
      expectedState
    );
  });
});
