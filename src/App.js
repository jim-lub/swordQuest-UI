import React from 'react';

import {
  Tooltip,
  Actionbar,
  Menubar,
  PlayerPane
} from 'ui/components';

export const App = () => {
  return (
    <div className="userInterface-grid-wrapper">
      <div className="userInterface-grid-navbar"></div>
      <div className="userInterface-grid-column-left"></div>
      <div className="userInterface-grid-column-center">
        <div className="userInterface-grid-inner-databar-left"></div>
        <div className="userInterface-grid-inner-gamewindow">
          {<Tooltip />}
          {<Menubar />}
          {<PlayerPane />}
        </div>
        <div className="userInterface-grid-inner-databar-right"></div>
        <div className="userInterface-grid-inner-databar-bottom">
          {<Actionbar />}

        </div>
      </div>
      <div className="userInterface-grid-column-right"></div>
    </div>
  )
};
