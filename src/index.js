import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import rootReducer from "interface/reducers";

import { App } from './App';

import 'css/bundler.js';

// temp initializer imports
import { setPlayerControls, setActionbarAbilities } from 'interface/actions';

const store = createStore(rootReducer)

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <DragDropContextProvider backend={HTML5Backend}>
        <App />
      </DragDropContextProvider>
    </Provider>,
    document.getElementById('root')
  )
}

renderApp();

export const Store = store;

// temp initializer functions
const initialize = () => {
  // setup controls:
  const controlsMap = new Map([[1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"], [6, "6"], [7, "7"], [8, "8"], [9, "9"], [10, "shift"]]);
  store.dispatch(setPlayerControls(controlsMap));

  // setup abilities:
  const abilitiesMap = new Map([[1, "magic_fire_fireball"], [2, "magic_frost_frostbolt"],
                                [3, "magic_shadow_shadowbolt"], [4, "magic_fire_scorch"],
                                [5, "empty"], [6, "locked"],
                                [7, "locked"], [8, "locked"],
                                [9, "locked"], [10, "magic_shadow_shadowDash"]]);
  store.dispatch(setActionbarAbilities(abilitiesMap));
}

initialize();
