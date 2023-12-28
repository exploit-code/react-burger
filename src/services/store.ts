import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { socketMiddleware } from "./middleware/web-socket";

const persistConfig = {
  key: "app",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, socketMiddleware("wss://norma.nomoreparties.space/orders")],
});

export const persistor = persistStore(store);
