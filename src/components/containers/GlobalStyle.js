import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        min-height: 100vh;
    }
    * {
        /*box-sizing: border-box;*/
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        user-select: none;
    }
    #root {
        min-height: 100vh;
    }
`;

export default GlobalStyle;
