import { combineReducers } from 'redux';
import tooltip from './tooltip';
import tooltip_history from './tooltip_history';

export default combineReducers({
  tooltip,
  tooltip_history
})
