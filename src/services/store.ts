import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import type { Middleware } from "redux";
import {
  WS_CONNECTION_FEED_START,
  WS_CONNECTION_FEED_SUCCESS,
  WS_GET_FEED_DATA,
  WS_CONNECTION_FEED_CLOSED,
  WS_CONNECTION_FEED_ERROR,
  WS_CONNECTION_USER_CLOSED,
  WS_CONNECTION_USER_ERROR,
  WS_CONNECTION_USER_START,
  WS_CONNECTION_USER_SUCCESS,
  WS_GET_USER_DATA,
} from "./constants/web-socket";
import { socketMiddleware } from "./middleware/web-socket";

const wsBaseURL = "wss://norma.nomoreparties.space/orders";

const wsUserActions = {
  wsInit: WS_CONNECTION_USER_START,
  wsOpen: WS_CONNECTION_USER_SUCCESS,
  wsMessage: WS_GET_USER_DATA,
  wsClose: WS_CONNECTION_USER_CLOSED,
  wsError: WS_CONNECTION_USER_ERROR,
};

const wsFeedActions = {
  wsInit: WS_CONNECTION_FEED_START,
  wsOpen: WS_CONNECTION_FEED_SUCCESS,
  wsMessage: WS_GET_FEED_DATA,
  wsClose: WS_CONNECTION_FEED_CLOSED,
  wsError: WS_CONNECTION_FEED_ERROR,
};
const wsFeed: Middleware = socketMiddleware(wsFeedActions, `${wsBaseURL}/all`, false);
const wsUser: Middleware = socketMiddleware(wsUserActions, wsBaseURL, true);

const persistConfig = {
  key: "app",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, wsFeed, wsUser],
});

export const persistor = persistStore(store);
