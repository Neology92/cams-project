import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputBase, InputLabel } from '@material-ui/core';
import Icon from '../Icon';
import { Check, CheckCopy } from '../../assets/icons';

// Prop "type" takes string and defines type of input.
// 'default' for normal input and 'search' for search input

// state: default/error/approve

class Input extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            focused: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.renderStateIcon = this.renderStateIcon.bind(this);
        this.renderTypeIcon = this.renderPrefixIcon.bind(this);
    }

    handleChange(e) {
        const { setValue } = this.props;
        setValue(e.target.value);
    }

    handleFocus() {
        const { focused } = this.state;
        this.setState({
            focused: !focused,
        });
    }

    renderStateIcon() {
        const { state } = this.props;

        switch (state) {
            case 'error':
                return <StateIcon component={CheckCopy} state={state} />;

            case 'approve':
                return <StateIcon component={Check} state={state} />;

            default:
                return null;
        }
    }

    renderPrefixIcon() {
        const { type, icon } = this.props;
        const { focused } = this.state;

        return icon ? (
            <PrefixIcon component={icon} type={type} focused={focused} />
        ) : null;
    }

    render() {
        const {
            label,
            value,
            setValue,
            placeholder,
            type,
            icon,
            state,
            width,
            ...props
        } = this.props;

        return (
            <Wrapper>
                <div>
                    <StyledLabel>{label}</StyledLabel>
                </div>
                <StyledInput
                    value={value}
                    placeholder={placeholder}
                    type={type}
                    onChange={e => this.handleChange(e)}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                    width={width}
                    state={state}
                    isIcon={icon}
                    {...props}
                />
                {this.renderStateIcon()}
                {this.renderPrefixIcon()}
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 8px 0;
`;

const StateIcon = styled(Icon)`
    && {
        position: absolute;
        top: -3px;
        right: -1px;

        g > path:nth-child(2) {
            fill: ${({ state, theme }) =>
                state === 'error'
                    ? theme.palette.error.main
                    : theme.palette.green.main};
        }
    }
`;

const PrefixIcon = styled(Icon)`
    && {
        position: absolute;
        bottom: 6px;
        left: 8px;

        g > path:nth-child(2) {
            fill: ${({ focused, theme }) =>
                focused
                    ? theme.palette.text.default
                    : theme.palette.text.secondary};
        }
    }
`;

const StyledLabel = styled(InputLabel)`
    && {
        position: relative;
        float: left;
        color: ${({ theme }) => theme.palette.text.primary};
        font-size: 14px;
        margin-bottom: 7px;
    }
`;
const StyledInput = styled(InputBase)`
    .MuiInputBase {
        &-input {
            position: relative;
            box-sizing: border-box;
            padding: 4px;
            width: ${({ width }) => width};
            min-height: 30px;
            border: 1px solid
                ${({ theme, state }) =>
                    state === 'error'
                        ? theme.palette.error.main
                        : theme.palette.secondary.main};

            border-radius: 4px;
            background-color: ${({ theme }) => theme.palette.secondary.main};
            font-size: 14px;
            transition: ${({ theme }) =>
                theme.transitions.create(['border-color'])};

            ${({ isIcon }) => (isIcon ? 'padding: 0 0 0 35px;' : null)}
        }

        &-input:focus {
            border-color: ${({ theme, state }) =>
                state === 'error'
                    ? theme.palette.error.main
                    : theme.palette.primary.main};
            background: ${({ theme }) => theme.palette.background.default};
        }

        &-input::placeholder {
            color: ${({ theme }) => theme.palette.text.secondary};
            opacity: 1;
        }

        &-inputTypeSearch {
            background-color: ${({ theme }) => theme.palette.secondary.main};
        }
    }
`;

Input.propTypes = {
    icon: PropTypes.func,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    state: PropTypes.string,
    width: PropTypes.string,
    rows: PropTypes.number,
    rowsMax: PropTypes.number,
};

Input.defaultProps = {
    icon: null,
    label: '',
    placeholder: '',
    type: 'default',
    state: 'default',
    width: '256px',
    rows: 2,
    rowsMax: 4,
};

export default Input;
