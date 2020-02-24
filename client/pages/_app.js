import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { lightMuiTheme, darkMuiTheme } from '../assets/styles/muiTheme';
import { Navbar } from '../components';

import GlobalStyle from '../assets/styles/GlobalStyle';

export default class MyApp extends App {
    constructor(props) {
        super(props);

        this.state = { muiTheme: lightMuiTheme };
        this.switchColorsMode = this.switchColorsMode.bind(this);
    }

    switchColorsMode() {
        if (this.state.muiTheme === lightMuiTheme) {
            this.setState({
                muiTheme: darkMuiTheme,
            });
        } else {
            this.setState({
                muiTheme: lightMuiTheme,
            });
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <MuiThemeProvider theme={this.state.muiTheme}>
                <ThemeProvider theme={this.state.muiTheme}>
                    <GlobalStyle />
                    <Navbar />
                    <Component
                        {...pageProps}
                        switchColorsMode={this.switchColorsMode}
                    />
                </ThemeProvider>
            </MuiThemeProvider>
        );
    }
}
