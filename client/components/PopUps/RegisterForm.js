import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../ui-elements/Input';
import Button from '../ui-elements/Button';
import Modal from '../Modal/Modal';
import Description from '../Text/Description';
import { Sliders, Coins, Shield, Mail, Lock, User } from '../../assets/icons';
import check from '../../utils/check';

const messageItems = [
    {
        icon: Sliders,
        label: 'Super jakość',
        desc:
            'Najwyższa jakość strumienia. Nie ograniczamy możliwości, transmituj i oglądaj w HD, full-HD lub 4k. Wybór należy do Ciebie!    ',
    },
    {
        icon: Coins,
        label: 'Niskie Prowizje',
        desc:
            'Brak prowizji dla kupującego. Pieniądze które inwestujesz są w całości zamieniane na tokeny. Nic nie tracisz!',
    },
    {
        icon: Shield,
        label: 'Prywatność',
        desc:
            'Nasz autorski system antypiracki sprawia, że transmisje są najbezpieczniejsze na rynku, a z danymi obchodzimy się ostrożnie.',
    },
];

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

const emailRules = [
    {
        expression: str => str.length > 25,
        response: 'cannot be longer than 25 characters.',
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

class RegisterForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
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
            generalErrorMessage: '',
            allowToRegister: false,
        };
        this.manageRegisterPermission = this.manageRegisterPermission.bind(
            this
        );
        this.signUp = this.signUp.bind(this);
        this.check = check.bind(this);
    }

    componentDidUpdate() {
        this.manageRegisterPermission();
    }

    manageRegisterPermission() {
        const { login, email, password } = this.state;

        if (
            login.state === 'approve' &&
            email.state === 'approve' &&
            password.state === 'approve'
        ) {
            this.setState({ allowToRegister: true });
        } else {
            this.setState({ allowToRegister: false });
        }
    }

    signUp(e) {
        e.preventDefault();
        const { login, password, email } = this.state;

        // Clear general error message
        this.setState({
            generalErrorMessage: '',
        });

        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email.value,
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

                    // Continue to welcome screen
                    alert('Added user to database'); // eslint-diable-line
                } else {
                    // Display error
                    switch (json.field) {
                        case 'login':
                            this.setState({
                                login: {
                                    state: 'error',
                                    errorMessage: json.errorMessage,
                                },
                            });
                            break;
                        case 'password':
                            this.setState({
                                password: {
                                    state: 'error',
                                    errorMessage: json.errorMessage,
                                },
                            });
                            break;
                        case 'email':
                            this.setState({
                                email: {
                                    state: 'error',
                                    errorMessage: json.errorMessage,
                                },
                            });
                            break;

                        default:
                            this.setState({
                                generalErrorMessage: json.errorMessage,
                            });
                            break;
                    }
                }
            });
    }

    render() {
        const {
            login,
            email,
            password,
            generalErrorMessage,
            allowToRegister,
        } = this.state;
        const { isOpen, close } = this.props;
        return (
            <Modal
                label="Darmowa rejestracja"
                desc="Dołącz do 320 000 użytkowników, którzy nam zaufali i twórz społeczność razem z nami!"
                messageItems={messageItems}
                isOpen={isOpen}
                close={close}
            >
                <form onSubmit={this.signUp}>
                    <Input
                        value={login.value}
                        setValue={value =>
                            this.setState({ login: { ...login, value } }, () =>
                                this.setState(prevState =>
                                    this.check(
                                        'login',
                                        prevState.login,
                                        loginRules
                                    )
                                )
                            )
                        }
                        state={login.state}
                        label="Nazwa użytkownika"
                        placeholder="Mateusz"
                        icon={User}
                        width="100%"
                    />
                    {login.state === 'error' && (
                        <ErrorMessage>{login.errorMessage}</ErrorMessage>
                    )}
                    <Input
                        value={email.value}
                        setValue={value =>
                            this.setState({ email: { ...email, value } }, () =>
                                this.setState(prevState =>
                                    this.check(
                                        'email',
                                        prevState.email,
                                        emailRules
                                    )
                                )
                            )
                        }
                        state={email.state}
                        label="Adres email"
                        placeholder="nazwa@domena.pl"
                        icon={Mail}
                        width="100%"
                    />
                    {email.state === 'error' && (
                        <ErrorMessage>{email.errorMessage}</ErrorMessage>
                    )}
                    <Input
                        value={password.value}
                        setValue={value =>
                            this.setState(
                                { password: { ...password, value } },
                                () =>
                                    this.setState(prevState =>
                                        this.check(
                                            'password',
                                            prevState.password,
                                            passwordRules
                                        )
                                    )
                            )
                        }
                        state={password.state}
                        label="Hasło"
                        type="password"
                        placeholder="••••••••••"
                        icon={Lock}
                        width="100%"
                    />
                    {password.state === 'error' && (
                        <ErrorMessage>{password.errorMessage}</ErrorMessage>
                    )}
                    <Description>
                        <span>
                            Klikając przycisk rejestracji, potwierdzasz
                            przeczytanie i przyjmujesz do wiadomości wytyczne
                            przedstawione w
                        </span>
                        <a href="/regulamin"> warunkach korzystania z usług</a>
                        <span> oraz w </span>
                        <a href="/polityka-prywatnosci">
                            informacji o polityce prywatności.
                        </a>
                    </Description>
                    <ButtonsWrapper>
                        {generalErrorMessage && (
                            <ErrorMessage>{generalErrorMessage}</ErrorMessage>
                        )}
                        <Button
                            disabled={!allowToRegister}
                            width="100%"
                            color="primary"
                            type="submit"
                        >
                            Zarejestruj się
                        </Button>
                        <Button
                            onClick={() => alert('clicked')}
                            width="100%"
                            color="secondary"
                        >
                            Zaloguj się na istniejące konto
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

const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.palette.error.main};
    font-size: 12px;
    margin: -5px 0 5px;
    &::first-letter {
        text-transform: uppercase;
    }
`;

RegisterForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};

export default RegisterForm;
