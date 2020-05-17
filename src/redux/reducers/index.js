import { combineReducers } from 'redux';
import register from './signup/signupReducer';
import login from './signin/loginReducer';

export const reducer = combineReducers({
  login,
  register,
});
