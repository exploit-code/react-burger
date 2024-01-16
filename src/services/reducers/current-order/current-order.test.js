import * as types from "../../constants/current-order";
import { currentOrder, initialState } from "./current-order";

describe("test reducer currentOrder", () => {
  it("should return the initial state", () => {
    expect(currentOrder(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_CURRENT_ORDER", () => {
    const mockCurrentOrder = {
      ingredients: [],
      _id: "id",
      status: "status",
      number: 1111,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      name: "name",
      totalPrice: 0,
      upgradeStatus: "upgradeStatus",
    };

    const expectedState = {
      order: mockCurrentOrder,
    };

    expect(
      currentOrder(undefined, { type: types.SET_CURRENT_ORDER, payload: mockCurrentOrder })
    ).toEqual(expectedState);
  });
});
