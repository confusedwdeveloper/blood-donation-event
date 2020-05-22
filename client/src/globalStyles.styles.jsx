import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    }
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;
export default GlobalStyle;
