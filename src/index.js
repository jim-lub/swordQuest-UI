import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";

import { App } from "components";

import 'css/bundler.js';


const store = createStore(rootReducer)

export const logStore = () => {
  console.log(store.getState());
};

export const setTooltip = (payload) => {
  store.dispatch({type: 'TOOLTIP_UPDATE', ...payload});
}

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('root')
  )
}

store.subscribe(renderApp);
renderApp();

logStore();
