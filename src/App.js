import React from 'react';

import {
  Tooltip,
  Actionbar
} from 'ui/components';

export const App = () => {
  return (
    <div className="UI-gamewindow-container">
      {<Actionbar />}
      {<Tooltip />}
    </div>
  )
};
