import * as types from "../../constants/web-socket";
import { webSocket, initialState } from "./web-socket";

describe("test reducer webSocket", () => {
  it("should return the initial state", () => {
    expect(webSocket(undefined, {})).toEqual(initialState);
  });

  it("should handle WS_CONNECTION_FEED_START", () => {
    expect(webSocket(undefined, { type: types.WS_CONNECTION_FEED_START })).toEqual({
      ...initialState,
      connected: true,
      loading: true,
    });
  });

  it("should handle WS_CONNECTION_USER_START", () => {
    expect(webSocket(undefined, { type: types.WS_CONNECTION_USER_START })).toEqual({
      ...initialState,
      connected: true,
      loading: true,
    });
  });

  it("should handle WS_CONNECTION_FEED_SUCCESS", () => {
    expect(webSocket(undefined, { type: types.WS_CONNECTION_FEED_SUCCESS })).toEqual({
      ...initialState,
      connected: true,
      loading: false,
    });
  });

  it("should handle WS_CONNECTION_USER_SUCCESS", () => {
    expect(webSocket(undefined, { type: types.WS_CONNECTION_USER_SUCCESS })).toEqual({
      ...initialState,
      connected: true,
      loading: false,
    });
  });

  it("should handle WS_CONNECTION_FEED_ERROR", () => {
    const mockErrorMessage = "Some error message";
    expect(
      webSocket(undefined, { type: types.WS_CONNECTION_FEED_ERROR, payload: mockErrorMessage })
    ).toEqual({
      ...initialState,
      error: mockErrorMessage,
    });
  });

  it("should handle WS_CONNECTION_USER_ERROR", () => {
    const mockErrorMessage = "Some error message";
    expect(
      webSocket(undefined, { type: types.WS_CONNECTION_USER_ERROR, payload: mockErrorMessage })
    ).toEqual({
      ...initialState,
      error: mockErrorMessage,
    });
  });

  it("should handle WS_GET_FEED_DATA", () => {
    const mockOrder = {
      _id: "_id",
      ingredients: ["_id", "_id"],
      owner: "owner",
      status: "status",
      name: "name",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      number: 0,
      __v: 0,
    };

    expect(webSocket(undefined, { type: types.WS_GET_FEED_DATA, payload: [mockOrder] })).toEqual({
      ...initialState,
      feedOrders: { ...initialState.feedOrders, ...[mockOrder] },
    });
  });

  it("should handle WS_GET_USER_DATA", () => {
    const mockOrder = {
      _id: "_id",
      ingredients: ["_id", "_id"],
      owner: "owner",
      status: "status",
      name: "name",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      number: 0,
      __v: 0,
    };

    expect(webSocket(undefined, { type: types.WS_GET_USER_DATA, payload: [mockOrder] })).toEqual({
      ...initialState,
      userOrders: { ...initialState.userOrders, ...[mockOrder] },
    });
  });

  it("should handle WS_CONNECTION_FEED_CLOSED", () => {
    expect(webSocket(undefined, { type: types.WS_CONNECTION_FEED_CLOSED })).toEqual({
      ...initialState,
      connected: false,
      loading: false,
    });
  });

  it("should handle WS_CONNECTION_USER_CLOSED", () => {
    expect(webSocket(undefined, { type: types.WS_CONNECTION_USER_CLOSED })).toEqual({
      ...initialState,
      connected: false,
      loading: false,
    });
  });
});
