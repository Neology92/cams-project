import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body {
        background: ${({ theme }) => theme.palette.background.main};
        padding: 0;
        margin: 0;
    }

`;

export default GlobalStyle;
