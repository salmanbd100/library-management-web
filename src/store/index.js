import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store;

function Root({ children, initialState = {} }) {
  store = createStore(
    allReducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return <Provider store={store}>{children}</Provider>;
}

export default Root;
