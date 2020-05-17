/* eslint-disable require-jsdoc */
import usePersisted from '../src/components/hooks/usePersisted';
import GlobalStyle from '../public/assets/styles/css/global';
import { ThemeProvider } from 'styled-components';
import { wrapper } from '../src/redux/store';
import dark from '../public/assets/styles/themes/dark';
import light from '../public/assets/styles/themes/light';
import LayoutTheme from '../src/components/layouts/main';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = usePersisted('theme', dark);

  const changeTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const Layout = ({ children }) => (
    <LayoutTheme toggleTheme={changeTheme}>{children}</LayoutTheme>
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
