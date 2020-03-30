import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Grid, Container } from '@material-ui/core';
import { Button, RegisterForm, LoginForm, Tooltip } from '../components';

import { UserContext } from '../utils/contexts';
import logout from '../utils/logout';

class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openRegisterModal: false,
            openLoginModal: false,
        };
    }

    componentDidMount() {}

    render() {
        const { openLoginModal, openRegisterModal } = this.state;

        return (
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Space />
                    </Grid>
                    <Grid item xs={12}>
                        <Space>
                            <UserContext.Consumer>
                                {context =>
                                    context.checkingToken ? (
                                        <Loading />
                                    ) : (
                                        <>
                                            {context.sessionToken ? (
                                                <>
                                                    <h2>
                                                        Hello{' '}
                                                        {
                                                            context.user.account
                                                                .username
                                                        }
                                                        !
                                                    </h2>
                                                    <Button
                                                        color="secondary"
                                                        onClick={() => logout()}
                                                    >
                                                        Wyloguj się
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Tooltip title="Załóż nowe konto">
                                                        <Button
                                                            color="primary"
                                                            onClick={() =>
                                                                this.setState({
                                                                    openRegisterModal: true,
                                                                })
                                                            }
                                                        >
                                                            Darmowa rejestracja
                                                        </Button>
                                                    </Tooltip>

                                                    <RegisterForm
                                                        isOpen={
                                                            openRegisterModal
                                                        }
                                                        close={() =>
                                                            this.setState({
                                                                openRegisterModal: false,
                                                            })
                                                        }
                                                    />

                                                    <Button
                                                        color="secondary"
                                                        onClick={() =>
                                                            this.setState({
                                                                openLoginModal: true,
                                                            })
                                                        }
                                                    >
                                                        Logowanie
                                                    </Button>
                                                    <LoginForm
                                                        isOpen={openLoginModal}
                                                        close={() =>
                                                            this.setState({
                                                                openLoginModal: false,
                                                            })
                                                        }
                                                    />
                                                </>
                                            )}
                                        </>
                                    )
                                }
                            </UserContext.Consumer>
                        </Space>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const Loading = () => <p>Loading...</p>;

const Space = styled.div`
    min-height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export default Home;
