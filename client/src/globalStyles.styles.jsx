import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    position: relative;
    }
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
`;
export default GlobalStyle;
