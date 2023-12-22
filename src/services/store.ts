import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { wsThunk } from "./middleware/ws";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, wsThunk("wss://norma.nomoreparties.space/orders/all")],
});

export const persistor = persistStore(store);
