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

// store.subscribe(renderApp);
renderApp();

export const Store = store;

// temp initializer functions
const initialize = () => {
  // setup controls:
  const controlsMap = new Map([[1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"], [6, "6"], [7, "7"], [8, "8"], [9, "9"], [10, "shift"]]);
  store.dispatch(setPlayerControls(controlsMap));

  // setup abilities:
  const abilitiesMap = new Map([[1, "melee_warrior_swordstrike"], [2, "melee_warrior_mortalStrike"],
                                [3, "magic_fire_scorch"], [4, "magic_fire_fireball"],
                                [5, "magic_frost_frostbolt"], [6, "magic_frost_frostbolt"],
                                [7, "magic_restoration_heal"], [8, "empty"],
                                [9, "locked"], [10, "locked"]]);
  store.dispatch(setActionbarAbilities(abilitiesMap));
}

initialize();
