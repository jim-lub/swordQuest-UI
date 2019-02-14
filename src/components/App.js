import React from 'react';

import {
  AbilitiesBar,
  Tooltip
} from 'components';

import {
  Actionbar
} from 'components/ui'

export const App = ({ store }) => {
  return (
    <div className="UI-gamewindow-container">
      {<Actionbar />}
      {<AbilitiesBar />}
      {<Tooltip {...store.getState().tooltip}/>}
    </div>
  )
};
