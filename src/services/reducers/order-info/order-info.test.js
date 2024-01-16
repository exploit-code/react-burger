import * as types from "../../constants/order-info";
import { orderInfo, initialState } from "./order-info";

describe("test reducer orderInfo", () => {
  it("should return the initial state", () => {
    expect(orderInfo(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_ORDER_INFO_REQUEST", () => {
    expect(
      orderInfo(undefined, {
        type: types.GET_ORDER_INFO_REQUEST,
      })
    ).toEqual({
      requestOrder: {
        _id: "",
        ingredients: [],
        owner: "",
        status: "",
        name: "",
        createdAt: "",
        updatedAt: "",
        number: 0,
        __v: 0,
      },
      loading: true,
      error: false,
    });
  });

  it("should handle GET_ORDER_INFO_SUCCESS", () => {
    const mockOrder = {
      _id: "mockId",
      ingredients: ["ingredient1", "ingredient2"],
      owner: "mockOwner",
      status: "mockStatus",
      name: "mockName",
      createdAt: "mockCreatedAt",
      updatedAt: "mockUpdatedAt",
      number: 1,
      __v: 1,
    };

    expect(
      orderInfo(undefined, {
        type: types.GET_ORDER_INFO_SUCCESS,
        payload: {
          orders: [mockOrder],
        },
      })
    ).toEqual({
      requestOrder: mockOrder,
      loading: false,
      error: false,
    });
  });

  it("should handle GET_ORDER_INFO_ERROR", () => {
    expect(
      orderInfo(undefined, {
        type: types.GET_ORDER_INFO_ERROR,
      })
    ).toEqual({
      requestOrder: {
        _id: "",
        ingredients: [],
        owner: "",
        status: "",
        name: "",
        createdAt: "",
        updatedAt: "",
        number: 0,
        __v: 0,
      },
      loading: false,
      error: true,
    });
  });
});
