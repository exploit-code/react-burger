import * as types from "../../constants/order-details";
import { orderDetails, initialState } from "./order-details";

describe("test reducer orderDetails", () => {
  it("should return the initial state", () => {
    expect(orderDetails(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_ORDER_REQUEST", () => {
    expect(
      orderDetails(undefined, {
        type: types.GET_ORDER_REQUEST,
      })
    ).toEqual({
      order: null,
      loading: true,
      error: false,
    });
  });

  it("should handle GET_ORDER_SUCCESS", () => {
    const mockOrderNumber = {
      order: {
        number: 1234,
      },
    };

    expect(
      orderDetails(undefined, { type: types.GET_ORDER_SUCCESS, payload: mockOrderNumber })
    ).toEqual({
      order: mockOrderNumber.order.number,
      loading: false,
      error: false,
    });
  });

  it("should handle GET_ORDER_ERROR", () => {
    expect(
      orderDetails(undefined, {
        type: types.GET_ORDER_ERROR,
      })
    ).toEqual({
      order: null,
      loading: false,
      error: true,
    });
  });
});
