import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { App } from "components/App";

import 'css/css.js';

const store = createStore(rootReducer)

console.log(store.getState());

export const setTooltip = (payload) => {
  store.dispatch({type: 'TOOLTIP_UPDATE', ...payload});
  // console.log(store.getState().tooltip);
}

const renderApp = () => {
  render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('root')
  )
}

store.subscribe(renderApp);
renderApp();
