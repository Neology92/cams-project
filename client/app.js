import React, { Component } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import { lightMuiTheme, darkMuiTheme } from './assets/styles/muiTheme';
// import { getFromStorage, setInStorage } from './utils/storage';
// import { UserContext } from './utils/contexts';
// import { Navbar } from './components';
import Router from './Router';

// import GlobalStyle from './assets/styles/GlobalStyle';
// import './assets/styles/fontNunitoSans.css';

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         muiTheme: lightMuiTheme,
    //         sessionToken: '',
    //         user: {},
    //     };
    //     this.switchColorsMode = this.switchColorsMode.bind(this);
    // }

    // componentDidMount() {
    //     const sessionToken = getFromStorage('session_token');
    //     if (sessionToken) {
    //         // Verify session token and fetch user data
    //         fetch('/api/verifyToken', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 sessionToken,
    //             }),
    //         })
    //             .then(res => res.json())
    //             .then(res => {
    //                 if (res.success) {
    //                     this.setState({ sessionToken, user: res.user });
    //                 } else {
    //                     this.setState({ sessionToken: '', user: {} });
    //                     setInStorage('session_token', '');
    //                 }
    //             })
    //             .catch(null);
    //     }
    // }

    // switchColorsMode() {
    //     const { muiTheme } = this.state;
    //     if (muiTheme === lightMuiTheme) {
    //         this.setState({
    //             muiTheme: darkMuiTheme,
    //         });
    //     } else {
    //         this.setState({
    //             muiTheme: lightMuiTheme,
    //         });
    //     }
    // }

    render() {
        // const { sessionToken, user, muiTheme } = this.state;
        const { thing } = this.props;

        return (
            <>
                {/* <ThemeProvider theme={muiTheme}> */}
                {/* <MuiThemeProvider theme={muiTheme}> */}
                {/* <UserContext.Provider value={{ sessionToken, user }}> */}
                {/* <GlobalStyle /> */}
                {/* <Navbar switchColorsMode={this.switchColorsMode} /> */}
                <h1>Message: {thing}</h1>
                <Router />
                {/* </UserContext.Provider> */}
                {/* </MuiThemeProvider> */}
                {/* </ThemeProvider> */}
            </>
        );
    }
}
