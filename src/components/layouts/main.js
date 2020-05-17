import Head from 'next/head';
import Nav from '../header';

export default ({ children, toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Bora</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Nav toggleTheme={toggleTheme} />
      </header>
      <main>{children}</main>
    </>
  );
};
