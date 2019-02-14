import React from 'react';

import {
  Tooltip
} from 'components';

import {
  Actionbar
} from 'components/ui'

export const App = ({ store }) => {
  return (
    <div className="UI-gamewindow-container">
      {<Actionbar />}
      {<Tooltip {...store.getState().tooltip}/>}
    </div>
  )
};
