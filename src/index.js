import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "ui/reducers";

import { App } from './App';

import 'css/bundler.js';


// temp initializer imports
import { setPlayerControls, setActionbarAbilities } from 'ui/actions';
import { ACTIONBAR_ABILITIES } from 'config/TEMP_INITIALIZERS/ACTIONBAR_ABILITIES';


const store = createStore(rootReducer)

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

// store.subscribe(renderApp);
renderApp();


// temp initializer functions
const init = () => {
  // setup controls:
  const controlsMap = new Map([[0, "1"], [1, "2"], [2, "3"], [3, "4"], [4, "5"], [5, "6"], [6, "7"], [7, "8"], [8, "shift"], [9, "space"]]);
  store.dispatch(setPlayerControls(controlsMap));

  // setup abilities:
  const abilitiesMap = ACTIONBAR_ABILITIES();
  store.dispatch(setActionbarAbilities(abilitiesMap));
}

init();
