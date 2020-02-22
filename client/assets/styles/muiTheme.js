import { createMuiTheme } from '@material-ui/core/styles';

const lightMuiTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: '#062ebd',
			contrastText: '#fff',
		},
		secondary: {
			main: '#f9f9f9',
			contrastText: '#000',
		},
		background: {
			main: '#f9f9f9',
			contrastText: '#000',
		},
		danger: {
			light: '#f05545',
			main: '#b71c1c',
			dark: '#7f0000',
			contrastText: '#fff',
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
