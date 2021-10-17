import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --white: #fff;
        --gray-50: #f7f8fa;
        --gray-100: #e6e8eb;
        --gray-200: #9EA9B9;
        --gray-500: #808080;
        --gray-800: #494d4b;
        --success: #00B93F;
        --primary: #4299e1;
        --primary-500: #2b6cb0;
        --danger: #D9534F;
        --danger-500: #be4844;
    }

    body {
        background: var(--gray-50);
        min-height: 100vh;
        max-width: 100vw;
        min-width: 320px
    }

    body,
    input,
    textarea,
    button {
    font: 500 1rem Inter, sans-serif;
    color: var(--gray-500);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-weight: 600;
    font-family: Lexend, sans-serif;
    color: var(--gray-800);
    }

`;

export default GlobalStyles;
