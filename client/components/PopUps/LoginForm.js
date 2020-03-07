import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../ui-elements/Input';
import Button from '../ui-elements/Button';
import Modal from '../Modal/Modal';
import Description from '../Text/Description';
import { Lock, User } from '../../assets/icons';

const messageItems = [];

class LoginForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            allowToLogin: false,
        };
        this.checkIfInputsFilled = this.checkIfInputsFilled.bind(this);
    }

    componentDidUpdate() {
        this.checkIfInputsFilled();
    }

    checkIfInputsFilled() {
        const { username, password } = this.state;

        if (username && password) {
            this.setState({ allowToLogin: true });
        } else {
            this.setState({ allowToLogin: false });
        }
    }

    render() {
        const { username, password, allowToLogin } = this.state;
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
                <Input
                    value={username}
                    setValue={value => this.setState({ username: value })}
                    label="Login"
                    placeholder="Nick lub email"
                    icon={User}
                    width="100%"
                />
                <Input
                    value={password}
                    setValue={value => this.setState({ password: value })}
                    label="Hasło"
                    type="password"
                    placeholder="••••••••••"
                    icon={Lock}
                    width="100%"
                />
                <Description>
                    <a href="/odzyskiwanie-hasla"> Nie pamiętasz hasła?</a>
                </Description>
                <ButtonsWrapper>
                    <Button
                        onClick={() => alert('clicked')}
                        disabled={!allowToLogin}
                        width="100%"
                        color="primary"
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
