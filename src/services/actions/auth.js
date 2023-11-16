import { request } from "../../utils/api";
import { setCookie } from "../../utils/cookie";

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

export const userRegister = (props) => (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  request("auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(props),
  })
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.user });
      setCookie("refreshToken", res.refreshToken);
    })
    .catch(() => {
      dispatch({ type: REGISTER_ERROR });
    });
};

export const userForgotPassword = (props) => (dispatch) => {
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

export const userResetPassword = (props) => (dispatch) => {
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

// export const userLogOut = (token) => (dispatch) => {
//   dispatch({ type: LOGOUT_REQUEST });
//   request("auth/logout", {
//     method: "POST",
//     headers: { "Content-Type": "application/json;charset=utf-8" },
//     body: JSON.stringify(token),
//   })
//     .then((res) => {
//       dispatch({ type: LOGOUT_SUCCESS, payload: res });
//     })
//     .catch(() => {
//       dispatch({ type: LOGOUT_ERROR });
//     });
// };

// export const userLogIn = (user) => (dispatch) => {
//   dispatch({ type: LOGIN_REQUEST });
//   request("auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json;charset=utf-8" },
//     body: JSON.stringify(token),
//   })
//     .then((res) => {
//       dispatch({ type: LOGIN_SUCCESS, payload: res });
//     })
//     .catch(() => {
//       dispatch({ type: LOGIN_ERROR });
//     });
// };
