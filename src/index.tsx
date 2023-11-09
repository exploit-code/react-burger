import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./services/reducers";

const store = configureStore({
  reducer: rootReducer,
});
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
