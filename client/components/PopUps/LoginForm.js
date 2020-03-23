import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../ui-elements/Input';
import Button from '../ui-elements/Button';
import Modal from '../Modal/Modal';
import ErrorMessage from '../Text/ErrorMessage';
import Description from '../Text/Description';
import { Lock, User } from '../../assets/icons';

import { setInStorage } from '../../utils/storage';

const messageItems = [];

const loginRules = [
    {
        expression: str => str.length > 10,
        response: 'cannot be longer than 10 characters.',
    },
    {
        expression: str => str.length < 1,
        response: 'cannot be empty.',
    },
];

const passwordRules = [
    {
        expression: str => str.length > 9,
        response: 'cannot be longer than 9 characters.',
    },
    {
        expression: str => str.length < 1,
        response: 'cannot be empty.',
    },
];

class LoginForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            login: {
                value: '',
                state: 'default',
                errorMessage: '',
            },
            password: {
                value: '',
                state: 'default',
                errorMessage: '',
            },
            generalErrorMessage: '',
            allowToLogin: false,
        };
        this.check = this.check.bind(this);
        this.signIn = this.signIn.bind(this);
        this.manageLoginPermission = this.manageLoginPermission.bind(this);
    }

    componentDidUpdate() {
        this.manageLoginPermission();
    }

    signIn(e) {
        e.preventDefault();

        const { login, password } = this.state;

        // Clear general error message
        this.setState({
            generalErrorMessage: '',
        });

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: login.value,
                password: password.value,
            }),
        })
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    // Clear inputs
                    this.setState({
                        login: {
                            value: '',
                            state: 'default',
                            errorMessage: '',
                        },
                        email: {
                            value: '',
                            state: 'default',
                            errorMessage: '',
                        },
                        password: {
                            value: '',
                            state: 'default',
                            errorMessage: '',
                        },
                    });

                    // Set sessionToken
                    setInStorage('session_token', json.token);
                    window.location.reload();

                    // Close modal
                } else {
                    // Display error
                    switch (json.field) {
                        case 'login':
                            this.setState({
                                login: {
                                    state: 'error',
                                    errorMessage: json.message,
                                },
                            });
                            break;
                        case 'password':
                            this.setState({
                                password: {
                                    state: 'error',
                                    errorMessage: json.message,
                                },
                            });
                            break;

                        default:
                            this.setState({
                                generalErrorMessage: json.message,
                            });
                            break;
                    }
                }
            });
    }

    check(fieldName, rules) {
        const field = this.state[fieldName]; //eslint-disable-line

        // Check rules
        for (let i = 0; i < rules.length; i += 1) {
            const { expression, response } = rules[i];
            const errorMessage = `${fieldName} ${response}`;

            if (expression(field.value)) {
                this.setState({
                    [fieldName]: {
                        ...field,
                        state: 'error',
                        errorMessage,
                    },
                });
                return;
            }
        }

        // If everything is ok
        this.setState({
            [fieldName]: {
                ...field,
                state: 'approve',
                errorMessage: '',
            },
        });
    }

    manageLoginPermission() {
        const { password, login } = this.state;

        if (password.state === 'approve' && login.state === 'approve') {
            this.setState({ allowToLogin: true });
        } else {
            this.setState({ allowToLogin: false });
        }
    }

    render() {
        const {
            login,
            password,
            allowToLogin,
            generalErrorMessage,
        } = this.state;
        const { isOpen, close } = this.props;

        return (
            <Modal
                label="Logowanie"
                desc="Zaloguj się do swojego konta i kontynuuj
                oglądanie najlepszych streamów w sieci."
                messageItems={messageItems}
                isOpen={isOpen}
                close={close}
            >
                <form onSubmit={this.signIn}>
                    <Input
                        value={login.value}
                        setValue={value => {
                            this.setState({ login: { ...login, value } }, () =>
                                this.check('login', loginRules)
                            );
                        }}
                        state={login.state}
                        icon={User}
                        label="Login"
                        placeholder="Nick lub email"
                        width="100%"
                    />
                    {login.state === 'error' && (
                        <ErrorMessage>{login.errorMessage}</ErrorMessage>
                    )}
                    <Input
                        value={password.value}
                        setValue={value =>
                            this.setState(
                                { password: { ...password, value } },
                                () => this.check('password', passwordRules)
                            )
                        }
                        state={password.state}
                        icon={Lock}
                        label="Hasło"
                        type="password"
                        placeholder="••••••••••"
                        width="100%"
                    />
                    {password.state === 'error' && (
                        <ErrorMessage>{password.errorMessage}</ErrorMessage>
                    )}
                    <Description>
                        <a href="/odzyskiwanie-hasla"> Nie pamiętasz hasła?</a>
                    </Description>
                    <ButtonsWrapper>
                        {generalErrorMessage && (
                            <ErrorMessage>{generalErrorMessage}</ErrorMessage>
                        )}
                        <Button
                            disabled={!allowToLogin}
                            width="100%"
                            color="primary"
                            type="submit"
                        >
                            Zaloguj się
                        </Button>
                        <Button
                            onClick={() => alert('clicked')}
                            width="100%"
                            color="secondary"
                        >
                            Stwórz darmowe konto
                        </Button>
                    </ButtonsWrapper>
                </form>
            </Modal>
        );
    }
}

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    & > button:first-child {
        margin-bottom: 8px;
    }
`;

LoginForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};

export default LoginForm;
