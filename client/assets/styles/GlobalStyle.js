import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body {
        background: ${({ theme }) => theme.palette.background.default};
        padding: 0;
        margin: 0;
        font-family: "Nunito Sans", sans-serif;
        color: ${({ theme }) => theme.palette.text.primary};
    }


`;

export default GlobalStyle;
