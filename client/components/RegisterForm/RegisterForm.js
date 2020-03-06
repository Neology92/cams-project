import PropTypes from 'prop-types';
import Input from '../ui-elements/Input';
import Modal from '../Modal/Modal';
import { Sliders, Coins, Shield, Mail, Lock, User } from '../../assets/icons';

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

class RegisterForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
    }

    render() {
        const { username, email, password } = this.state;
        const { isOpen, close } = this.props;

        return (
            <Modal
                label="Darmowa rejestracja"
                desc="Dołącz do 320 000 użytkowników, którzy nam zaufali i twórz społeczność razem z nami!"
                messageItems={messageItems}
                isOpen={isOpen}
                close={close}
            >
                <Input
                    value={username}
                    setValue={value => this.setState({ username: value })}
                    label="Nazwa użytkownika"
                    placeholder="Mateusz"
                    icon={User}
                    width="100%"
                />
                <Input
                    value={email}
                    setValue={value => this.setState({ email: value })}
                    label="Adres email"
                    placeholder="nazwa@domena.pl"
                    icon={Mail}
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
            </Modal>
        );
    }
}

RegisterForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};

export default RegisterForm;
