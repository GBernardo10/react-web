import { useContext } from 'react';
import { Switch } from '../styles/switch';
import { ThemeContext } from 'styled-components';
export default ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <Switch>
      <input
        checked={title === 'dark'}
        readOnly
        id="changeMode"
        type="checkbox"
        name="theme"
      />
      <label onClick={toggleTheme} htmlFor="changeMode"></label>
    </Switch>
  );
};
