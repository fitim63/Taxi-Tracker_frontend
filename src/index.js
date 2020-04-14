import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from "./auth/Signup";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

