import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  combineReducers,
  createStore,
  MyStateProvider,
} from "./store/MyStateManager";
import { counterReducer } from "./store/counterReducer";
import { userReducer } from "./store/userReducer";

const combinedReducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(combinedReducers);

ReactDOM.render(
  <React.StrictMode>
    <MyStateProvider store={store}>
      <App />
    </MyStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
