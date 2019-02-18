import { combineReducers } from 'redux';

import playerControls from './playerControls';
import actionbar from './actionbar';
import viewport from './viewport';
import tooltip from './tooltip';
import canvas from './canvas';

export default combineReducers({
  playerControls,
  actionbar,
  viewport,
  tooltip,
  canvas
})
