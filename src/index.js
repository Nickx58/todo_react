import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import Root from "./components/Root";
import { logger } from "./utils/store";

import "./index.scss";

const middlewares = [logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

render(<Root store={store} />, document.getElementById("root"));
