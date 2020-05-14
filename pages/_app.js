/* eslint-disable require-jsdoc */
import '../public/assets/styles/css/main.scss';
// import { ThemeProvider } from 'styled-components';

export default function MyApp({ Component, pageProps, store }) {
  return (
    // <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    // </ThemeProvider>
  );
}
