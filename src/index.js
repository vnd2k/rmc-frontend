import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { store } from "./stores";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        newestOnTop={false}
        pauseOnFocusLoss={false}
        closeButton={false}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
