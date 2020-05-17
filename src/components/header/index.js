import { Header } from '../styles/header';
import Switch from '../switch';

export default ({ toggleTheme }) => {
  return (
    <Header>
      <Switch toggleTheme={toggleTheme}></Switch>
    </Header>
  );
};
