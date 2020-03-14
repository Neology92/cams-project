import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { lightMuiTheme, darkMuiTheme } from '../assets/styles/muiTheme';
import { Navbar } from '../components';
import { getFromStorage } from '../utils/storage';

import GlobalStyle from '../assets/styles/GlobalStyle';
import '../assets/styles/fontNunitoSans.css';

const AccountContext = React.createContext({ sessionToken: null, user: null });

export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = {
            muiTheme: lightMuiTheme,
            sessionToken: null,
            user: null,
        };
        this.switchColorsMode = this.switchColorsMode.bind(this);
    }

    componentDidMount() {
        const sessionToken = getFromStorage('session_token');
        if (sessionToken) {
            // Verify session token and fetch user data
            const user = {};
            this.setState({ sessionToken, user });
        }
    }

    switchColorsMode() {
        if (this.state.muiTheme === lightMuiTheme) {
            this.setState({ muiTheme: darkMuiTheme });
        } else {
            this.setState({ muiTheme: lightMuiTheme });
        }
    }

    render() {
        const { sessionToken, user } = this.state;
        const { Component, pageProps } = this.props;
        return (
            <>
                <ThemeProvider theme={this.state.muiTheme}>
                    <MuiThemeProvider theme={this.state.muiTheme}>
                        <AccountContext.Provider value={{ sessionToken, user }}>
                            <GlobalStyle />
                            <Navbar />
                            <Component
                                {...pageProps}
                                switchColorsMode={this.switchColorsMode}
                            />
                        </AccountContext.Provider>
                    </MuiThemeProvider>
                </ThemeProvider>
            </>
        );
    }
}
