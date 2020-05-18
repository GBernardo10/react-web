import { combineReducers } from 'redux';
import register from './signup/signupReducer';
import login from './signin/loginReducer';
import eventos from '../ducks/eventos';
export const reducer = combineReducers({
  login,
  register,
  eventos,
});
