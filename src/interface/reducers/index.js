import { combineReducers } from 'redux';

import playerControls from './playerControls';
import actionbarSetup from './actionbarSetup';
import tooltip from './tooltip';
import canvas from './canvas';

export default combineReducers({
  playerControls,
  actionbarSetup,
  tooltip,
  canvas
})
