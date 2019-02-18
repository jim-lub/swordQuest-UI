import React from 'react';

import {
  Tooltip,
  Actionbar,
  DataBar,
  Menubar,
  ExperienceBar,
  PlayerPanel,
  Canvas
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
          {<Menubar />}
          {<Tooltip />}
          {<PlayerPanel />}
          <div className="temp"></div>
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
