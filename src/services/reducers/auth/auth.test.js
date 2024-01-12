import { initialState, auth } from "./auth";
import * as types from "../../constants/auth";

describe("test reducer auth", () => {
  it("should return the initial state", () => {
    expect(auth(undefined, {})).toEqual(initialState);
  });

  it("should handle REGISTER_REQUEST", () => {
    expect(auth(undefined, { type: types.REGISTER_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle REGISTER_SUCCESS", () => {
    const mockUser = {
      user: {
        email: "email",
        name: "name",
      },
    };

    expect(auth(undefined, { type: types.REGISTER_SUCCESS, payload: mockUser })).toEqual({
      ...initialState,
      loading: false,
      authorized: true,
      user: mockUser.user,
    });
  });

  it("should handle REGISTER_ERROR", () => {
    expect(auth(undefined, { type: types.REGISTER_ERROR })).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(auth(undefined, { type: types.LOGOUT_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(auth(undefined, { type: types.LOGOUT_SUCCESS })).toEqual(initialState);
  });

  it("should handle LOGOUT_ERROR", () => {
    expect(auth(undefined, { type: types.LOGOUT_ERROR })).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(auth(undefined, { type: types.LOGIN_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    const mockUser = {
      user: {
        email: "email",
        name: "name",
      },
    };

    expect(auth(undefined, { type: types.LOGIN_SUCCESS, payload: mockUser })).toEqual({
      ...initialState,
      authorized: true,
      loading: false,
      reset: false,
      user: mockUser.user,
    });
  });

  it("should handle LOGIN_ERROR", () => {
    expect(auth(undefined, { type: types.LOGIN_ERROR })).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("should handle FORGOT_PASSWORD_REQUEST", () => {
    expect(auth(undefined, { type: types.FORGOT_PASSWORD_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle FORGOT_PASSWORD_SUCCESS", () => {
    expect(auth(undefined, { type: types.FORGOT_PASSWORD_SUCCESS })).toEqual({
      ...initialState,
      reset: true,
    });
  });

  it("should handle FORGOT_PASSWORD_ERROR", () => {
    expect(auth(undefined, { type: types.FORGOT_PASSWORD_ERROR })).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("should handle RESET_PASSWORD_REQUEST", () => {
    expect(auth(undefined, { type: types.RESET_PASSWORD_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle RESET_PASSWORD_SUCCESS", () => {
    expect(auth(undefined, { type: types.RESET_PASSWORD_SUCCESS })).toEqual({
      ...initialState,
      reset: false,
    });
  });

  it("should handle RESET_PASSWORD_ERROR", () => {
    expect(auth(undefined, { type: types.RESET_PASSWORD_ERROR })).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("should handle UPDATE_TOKEN_REQUEST", () => {
    expect(auth(undefined, { type: types.UPDATE_TOKEN_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle UPDATE_TOKEN_SUCCESS", () => {
    expect(auth(undefined, { type: types.UPDATE_TOKEN_SUCCESS })).toEqual({
      ...initialState,
      loading: false,
      error: false,
    });
  });

  it("should handle UPDATE_TOKEN_ERROR", () => {
    expect(auth(undefined, { type: types.UPDATE_TOKEN_ERROR })).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("should handle GET_USER_REQUEST", () => {
    expect(auth(undefined, { type: types.GET_USER_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    const mockUser = {
      user: {
        email: "email",
        name: "name",
      },
    };

    expect(auth(undefined, { type: types.GET_USER_SUCCESS, payload: mockUser })).toEqual({
      ...initialState,
      user: mockUser.user,
    });
  });

  it("should handle GET_USER_ERROR", () => {
    expect(auth(undefined, { type: types.GET_USER_ERROR })).toEqual({
      ...initialState,
      error: true,
    });
  });

  it("should handle UPDATE_USER_REQUEST", () => {
    expect(auth(undefined, { type: types.UPDATE_USER_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    const mockUser = {
      user: {
        email: "email",
        name: "name",
      },
    };

    expect(auth(undefined, { type: types.UPDATE_USER_SUCCESS, payload: mockUser })).toEqual({
      ...initialState,
      user: mockUser.user,
    });
  });

  it("should handle UPDATE_USER_ERROR", () => {
    expect(auth(undefined, { type: types.UPDATE_USER_ERROR })).toEqual({
      ...initialState,
      error: true,
    });
  });
});
