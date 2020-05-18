import { combineReducers } from 'redux';

import register from './signup';
import login from './signin/';
import eventos from './eventos';

export default combineReducers({
  login,
  register,
  eventos,
});
