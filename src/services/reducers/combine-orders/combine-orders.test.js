import { initialState, combineOrders, IUpdatedOrder } from "./combine-orders";
import * as types from "../../constants/combine-orders";

describe("test reducer combineOrders", () => {
  it("should return the initial state", () => {
    expect(combineOrders(undefined, {})).toEqual(initialState);
  });

  it("should handle COMBINE_ORDERS_UPDATED", () => {
    const mockOrder = {
      _id: "_id",
      ingredients: ["_id"],
      owner: "owner",
      status: "status",
      name: "name",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      number: 1111,
      __v: 0,
    };

    const mockData = {
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

    const mockIngredientUpgrade = {
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
      count: 1,
    };

    const mockUpdatedOrders = [
      {
        ingredients: [mockIngredientUpgrade],
        _id: "_id",
        status: "status",
        number: 1111,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        name: "name",
        totalPrice: 0,
        upgradeStatus: "Статус неизвестен",
        owner: "owner",
        __v: 0,
      },
    ];

    const expectedState = {
      loading: true,
      error: false,
      updatedOrders: mockUpdatedOrders,
    };

    const resultState = combineOrders(undefined, {
      type: types.COMBINE_ORDERS_UPDATED,
      payload: { orders: [mockOrder], data: [mockData] },
    });

    expect(resultState).toEqual(expectedState);
    expect(resultState.updatedOrders).toHaveLength(1);

    const mockOrderDone = {
      _id: "_id_done",
      ingredients: ["_id_done"],
      owner: "owner",
      status: "done",
      name: "name",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      number: 1112,
      __v: 0,
    };

    const resultStateWithDoneOrder = combineOrders(resultState, {
      type: types.COMBINE_ORDERS_UPDATED,
      payload: { orders: [mockOrderDone], data: [mockData] },
    });

    expect(resultStateWithDoneOrder.updatedOrders[0].upgradeStatus).toBe("Выполнен");

    const mockOrderCreated = {
      _id: "_id_created",
      ingredients: ["_id_created"],
      owner: "owner",
      status: "created",
      name: "name",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      number: 1113,
      __v: 0,
    };

    const resultStateWithCreatedOrder = combineOrders(resultState, {
      type: types.COMBINE_ORDERS_UPDATED,
      payload: { orders: [mockOrderCreated], data: [mockData] },
    });

    expect(resultStateWithCreatedOrder.updatedOrders[0].upgradeStatus).toBe("Создан");

    const mockOrderPending = {
      _id: "_id_created",
      ingredients: ["_id_created"],
      owner: "owner",
      status: "pending",
      name: "name",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      number: 1113,
      __v: 0,
    };

    const resultStateWithPendingOrder = combineOrders(resultState, {
      type: types.COMBINE_ORDERS_UPDATED,
      payload: { orders: [mockOrderPending], data: [mockData] },
    });

    expect(resultStateWithPendingOrder.updatedOrders[0].upgradeStatus).toBe("Готовится");
  });

  it("should handle COMBINE_ORDERS_COMPLITE", () => {
    expect(combineOrders(undefined, { type: types.COMBINE_ORDERS_COMPLITE })).toEqual({
      ...initialState,
      loading: false,
    });
  });

  it("should handle COMBINE_ORDERS_ERROR", () => {
    expect(combineOrders(undefined, { type: types.COMBINE_ORDERS_ERROR })).toEqual({
      ...initialState,
      loading: false,
      error: true,
    });
  });

  it("should handle COMBINE_ORDERS_CLEAR", () => {
    expect(combineOrders(undefined, { type: types.COMBINE_ORDERS_CLEAR })).toEqual(initialState);
  });
});
