import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import { Grid, Container, Paper } from '@material-ui/core';
// import { Button, RegisterForm, LoginForm, Tooltip } from '../components';

// import { UserContext } from '../utils/contexts';
// import logout from '../utils/logout';

class Home extends PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         openRegisterModal: false,
    //         openLoginModal: false,
    //     };
    // }

    // componentDidMount() {}

    // render() {
    //     const { openLoginModal, openRegisterModal } = this.state;
    //     const { switchColorsMode } = this.props;

    //     return (
    //         <Container maxWidth="lg">
    //             <Grid container spacing={2}>
    //                 <Grid item xs={12}>
    //                     <Space />
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <Space>
    //                         <UserContext.Consumer>
    //                             {context =>
    //                                 context.sessionToken ? (
    //                                     <>
    //                                         <h2>
    //                                             Hello{' '}
    //                                             {context.user.account.username}!
    //                                         </h2>
    //                                         <Button
    //                                             color="secondary"
    //                                             onClick={() => logout()}
    //                                         >
    //                                             Wyloguj się
    //                                         </Button>
    //                                     </>
    //                                 ) : (
    //                                     <>
    //                                         <Tooltip title="Załóż nowe konto">
    //                                             <Button
    //                                                 color="primary"
    //                                                 onClick={() =>
    //                                                     this.setState({
    //                                                         openRegisterModal: true,
    //                                                     })
    //                                                 }
    //                                             >
    //                                                 Darmowa rejestracja
    //                                             </Button>
    //                                         </Tooltip>

    //                                         <RegisterForm
    //                                             isOpen={openRegisterModal}
    //                                             close={() =>
    //                                                 this.setState({
    //                                                     openRegisterModal: false,
    //                                                 })
    //                                             }
    //                                         />

    //                                         <Button
    //                                             color="secondary"
    //                                             onClick={() =>
    //                                                 this.setState({
    //                                                     openLoginModal: true,
    //                                                 })
    //                                             }
    //                                         >
    //                                             Logowanie
    //                                         </Button>
    //                                         <LoginForm
    //                                             isOpen={openLoginModal}
    //                                             close={() =>
    //                                                 this.setState({
    //                                                     openLoginModal: false,
    //                                                 })
    //                                             }
    //                                         />
    //                                     </>
    //                                 )
    //                             }
    //                         </UserContext.Consumer>
    //                     </Space>
    //                 </Grid>
    //                 <Grid item xs={12}>
    //                     <StyledPaper>
    //                         <Tooltip title="Zmień motyw kolorystyczny">
    //                             <Button
    //                                 color="primary"
    //                                 onClick={() => switchColorsMode()}
    //                             >
    //                                 Zmień Motyw
    //                             </Button>
    //                         </Tooltip>
    //                     </StyledPaper>
    //                 </Grid>
    //             </Grid>
    //         </Container>
    //     );
    // }

    render() {
        return (
            <div>
                <h1 style={{ fontFamily: 'Nunito Sans' }}>home</h1>
            </div>
        );
    }
}

// const StyledPaper = styled(Paper)`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-around;
//     align-items: center;
//     padding: 20px;
//     text-align: center;
// `;

// const Space = styled.div`
//     min-height: 50px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
// `;

// Home.propTypes = {
//     switchColorsMode: PropTypes.func.isRequired,
// };

export default Home;
