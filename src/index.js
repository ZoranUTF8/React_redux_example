import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
//? import reducer
import reducer from "./reducer";
//? react-redux Provider - wraps App - every component wrapeed can acces the store
import { Provider } from "react-redux";
//? add reducer to store

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
   window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
