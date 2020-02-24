import { createMuiTheme } from '@material-ui/core/styles';

const lightMuiTheme = createMuiTheme({
    palette: {
        type: 'light',
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
            light: '#ffffff',
            main: '#f9f9f9',
            contrastText: '#000',
        },
        text: {
            primary: '#181818',
            secondary: '#929292',
        },
        danger: {
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
const darkMuiTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#060e0d',
            contrastText: '#fff',
        },
        secondary: {
            main: '#444',
            contrastText: '#fff',
        },
        background: {
            main: '#333',
            contrastText: '#fff',
        },
        danger: {
            light: '#f05545',
            main: '#b71c1c',
            dark: '#7f0000',
            contrastText: '#fff',
        },
    },
});

export { lightMuiTheme, darkMuiTheme };
