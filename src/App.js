import React from 'react';

import {
  Tooltip,
  Actionbar,
  DataBar,
  Menubar,
  ExperienceBar,
  PlayerPanel,
  Canvas,
  AbilityQueue
} from 'interface/components';

import ViewportController from 'interface/ViewportController';
import GameStateController from 'interface/GameStateController';

export const App = () => {
  return (
    <div className="grid__wrapper">
      <div className="grid__container">

        <div className="grid__navbar-wrapper">
        </div>

        <div className="grid__viewport-wrapper">
          {<Canvas />}
          {<Menubar />}
          {<PlayerPanel />}
          {<AbilityQueue />}
          {<Tooltip />}
        </div>

        <div className="grid__bottombar-wrapper clearfix">
          <div className="grid__bottombar-row-one clearfix">
            {<DataBar />}
            {<Actionbar />}
            {<DataBar />}
          </div>

          <div className="grid__bottombar-row-two clearfix">
            {<ExperienceBar />}
          </div>
        </div>

      </div>
      {<ViewportController />}
      {<GameStateController />}
    </div>
  )
};

// <div className="temp"></div> (// wizard sprite)
