import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { App } from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

import { Provider } from "react-redux";
import { persistor, store } from "./services/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
  //</React.StrictMode>
);

reportWebVitals();
