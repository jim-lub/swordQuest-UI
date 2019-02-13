import React from "react";

import {
  AbilitiesBar,
  Tooltip,
  Colortester
} from 'components';

export const App = ({ store }) => {
  const tooltip = store.getState().tooltip;

  return (
    <div className="UI-gamewindow-container">
    {<Colortester />}
      {<AbilitiesBar />}
      {<Tooltip {...tooltip}/>}
    </div>
  )
};
