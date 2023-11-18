import { request } from "../../utils/api";
import { setCookie, deleteCookie } from "../../utils/cookie";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_ERROR = "REFRESH_TOKEN_ERROR";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const register = (props) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  request("auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  })
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res });
      setCookie("refreshToken", res.refreshToken);
    })
    .catch(() => {
      dispatch({ type: REGISTER_ERROR });
    });
};

export const login = (props) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  request("auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(props),
  })
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res });
      setCookie("refreshToken", res.refreshToken);
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const forgotPassword = (props) => (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });
  request("password-reset", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  })
    .then(() => {
      dispatch({ type: FORGOT_PASSWORD_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: FORGOT_PASSWORD_ERROR });
    });
};

export const resetPassword = (props) => (dispatch) => {
  dispatch({ type: RESET_PASSWORD_REQUEST });
  request("password-reset/reset", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  })
    .then(() => {
      dispatch({ type: RESET_PASSWORD_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: RESET_PASSWORD_ERROR });
    });
};

export const logout = (props) => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  request("auth/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ token: props }),
  })
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS, payload: res });
      deleteCookie("refreshToken");
    })
    .catch(() => {
      dispatch({ type: LOGOUT_ERROR });
    });
};

export const refreshToken = (props) => (dispatch) => {
  dispatch({ type: REFRESH_TOKEN_REQUEST });
  request("auth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  })
    .then((res) => {
      dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: res });
      setCookie("refreshToken", res.refreshToken);
    })
    .catch(() => {
      dispatch({ type: REFRESH_TOKEN_ERROR });
    });
};

export const getUser = (props) => (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  request("auth/user", {
    method: "GET",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  })
    .then((res) => {
      dispatch({ type: GET_USER_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: GET_USER_ERROR });
    });
};

export const updateUser = (props) => (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  request("auth/user", {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  })
    .then((res) => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res });
    })
    .catch(() => {
      dispatch({ type: UPDATE_USER_ERROR });
    });
};
