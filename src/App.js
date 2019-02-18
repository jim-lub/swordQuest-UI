import React from 'react';

import {
  Tooltip,
  Actionbar,
  DataBar,
  Menubar,
  ExperienceBar,
  PlayerPanel,
  Canvas,
  StatsPanel
} from 'interface/components';

import ViewportController from 'interface/ViewportController';

export const App = () => {
  return (
    <div className="grid__wrapper">
      <div className="grid__container">

        <div className="grid__navbar-wrapper">
        </div>

        <div className="grid__viewport-wrapper">
          {<ViewportController />}
          {<Canvas />}
          <div className="temp"></div> (// wizard sprite)
          {<Menubar />}
          {<PlayerPanel />}
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
    </div>
  )
};
