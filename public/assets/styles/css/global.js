import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
  }

  html {
    height: 100vh;
    width: 100vw;
  }

  body {
    height: 100%;
    width: 100%;
    background: ${(props) => props.theme.colors.background};
    color:${(props) => props.theme.colors.text}
  }

  .container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 960px;
    height: max-content;
  }
`;
