import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
require('dotenv').config();
import {
  Router,
} from 'react-router-dom'

import App from "./components/App";
import { history } from "./history";

import configureStore from "./store/configureStore";

export const store = configureStore();

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
