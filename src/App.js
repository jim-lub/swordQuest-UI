import React from 'react';

import {
  Tooltip,
  Actionbar,
  DataBar,
  Menubar,
  ExperienceBar,
  PlayerPanel
} from 'ui/components';

export const App = () => {
  return (
    <div className="grid__wrapper">
      <div className="grid__container">

        <div className="grid__navbar-wrapper">
        </div>

        <div className="grid__viewport-wrapper">
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

// {<ExperienceBar />}

// <div className="userInterface-grid-wrapper">
//   <div className="userInterface-grid-navbar"></div>
//   <div className="userInterface-grid-column-left"></div>
//   <div className="userInterface-grid-column-center">
//     <div className="userInterface-grid-inner-databar-left"></div>
//     <div className="userInterface-grid-inner-gamewindow">
//       {<Tooltip />}
//       {<Menubar />}
//       {<PlayerPane />}
//     </div>
//     <div className="userInterface-grid-inner-databar-right"></div>
//     <div className="userInterface-grid-inner-databar-bottom">
//         {<DataBar type="none" />}
//         {<Actionbar />}
//         {<DataBar type="currency" />}
//     </div>
//   </div>
//   <div className="userInterface-grid-column-right"></div>
// </div>
