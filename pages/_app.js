// /* eslint-disable require-jsdoc */
import usePersisted from '../src/components/hooks/usePersisted';
import GlobalStyle from '../public/assets/styles/css/global';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import dark from '../public/assets/styles/themes/dark';
import light from '../public/assets/styles/themes/light';
import LayoutTheme from '../src/components/layouts/main';

import withReduxStore from '../src/lib/with-redux-store';

function MyApp({ Component, pageProps, reduxStore }) {
  const [theme, setTheme] = usePersisted('theme', dark);

  const changeTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  const Layout = ({ children }) => (
    <LayoutTheme toggleTheme={changeTheme}>{children}</LayoutTheme>
  );

  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default withReduxStore(MyApp);
