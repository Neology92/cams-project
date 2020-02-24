import { createMuiTheme } from '@material-ui/core/styles';

const lightMuiTheme = createMuiTheme({
    palette: {
        type: 'light',
        common: { black: 'rgba(24, 24, 24, 1)', white: '#fff' },
        primary: {
            main: '#062ebd',
            contrastText: '#fff',
        },
        secondary: {
            main: '#EBEBEC',
            dark: '#d4d4d4',
            contrastText: '#000',
        },
        background: {
            default: '#ffffff',
            paper: '#F9F9F9',
        },
        text: {
            primary: '#181818',
            secondary: '#929292',
            disabled: '#929292',
            hint: '#929292',
        },
        error: {
            light: '#ff786e',
            main: '#E84343',
            dark: '#af001b',
            contrastText: '#fff',
        },
        green: {
            light: '#66ea96',
            main: '#28B767',
            dark: '#00863b',
            contrastText: '#fff',
        },
        orange: {
            light: '#fffe9e',
            main: '#FDCB6E',
            dark: '#FD9E6E',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: 'Nunito Sans, sans-serif',
    },
});

const darkMuiTheme = createMuiTheme({
    palette: {
        type: 'dark',
        common: { black: 'rgba(24, 24, 24, 1)', white: '#fff' },
        primary: {
            main: '#062ebd',
            contrastText: '#fff',
        },
        secondary: {
            main: '#242424',
            dark: '#d4d4d4',
            contrastText: '#fff',
        },
        background: {
            default: '#1A1A1A',
            paper: '#171717',
        },
        text: {
            primary: '#ffffff',
            secondary: '#929292',
            disabled: '#929292',
            hint: '#929292',
        },
        error: {
            light: '#ff786e',
            main: '#E84343',
            dark: '#af001b',
            contrastText: '#fff',
        },
        green: {
            light: '#66ea96',
            main: '#28B767',
            dark: '#00863b',
            contrastText: '#fff',
        },
        orange: {
            light: '#fffe9e',
            main: '#FDCB6E',
            dark: '#FD9E6E',
            contrastText: '#000',
        },
    },
});

export { lightMuiTheme, darkMuiTheme };
