import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputBase, InputLabel, FormControl } from '@material-ui/core';
import Icon from '../Icon';
import { Check, CheckCopy } from '../../assets/icons';

// Prop "type" takes string and defines type of input.
// 'default' for normal input and 'search' for search input

// state: default/error/approve

class Input extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
    }

    handleChange(e) {
        const { setValue } = this.props;
        setValue(e.target.value);
    }

    renderIcon() {
        const { state } = this.props;

        switch (state) {
            case 'error':
                return <StyledIcon component={CheckCopy} state={state} />;

            case 'approve':
                return <StyledIcon component={Check} state={state} />;

            default:
                return null;
        }
    }

    render() {
        const {
            label,
            value,
            setValue,
            placeholder,
            type,
            state,
            width,
            ...props
        } = this.props;

        return (
            <div>
                <div>
                    <StyledLabel>{label}</StyledLabel>
                </div>
                <FormControl>
                    <StyledInput
                        value={value}
                        placeholder={placeholder}
                        type={type}
                        onChange={e => this.handleChange(e)}
                        // onBlur={e => setValue(e.target.value)}
                        width={width}
                        state={state}
                        {...props}
                    />
                    {this.renderIcon()}
                </FormControl>
            </div>
        );
    }
}

const StyledIcon = styled(Icon)`
    && {
        position: absolute;
        top: -20px;
        right: 0;

        g > path:nth-child(2) {
            fill: ${({ state, theme }) =>
                state === 'error'
                    ? theme.palette.error.main
                    : theme.palette.green.main};
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
    .MuiInputBase-input {
        box-sizing: border-box;
        position: relative;
        border: 1px solid
            ${({ theme, state }) => {
                switch (state) {
                    case 'error':
                        return theme.palette.error.main;

                    case 'approve':
                        return theme.palette.green.main;

                    default:
                        return theme.palette.secondary.main;
                }
            }};
        background-color: ${({ theme }) => theme.palette.secondary.main};
        border-radius: 4px;
        width: ${({ width }) => width};
        min-height: 30px;
        font-size: 14px;
        padding: 4px;
        transition: ${({ theme }) =>
            theme.transitions.create(['border-color'])};

        &:focus {
            border-color: ${({ theme }) => theme.palette.primary.main};
            background: ${({ theme }) => theme.palette.background.default};
        }
    }

    .MuiInputBase-inputTypeSearch {
        background: url('https://resources-live.sketch.cloud/files/22d56c79-8cd4-4f44-ade6-61b84950f754.png?Expires=1582938000&Signature=oFe0cOV3MTv8n5m-TkjTZydrcWTT0HGjvjqSrXv8nhPe0qv3OAyV0uJ~EanqvetygDPa9yAxenq3soqYzwdqjpafkoZMVfQ1TBlma-yKs7SdnUz45pg1D2CZjaePQvak5oRDT6~HAIcWgXbKEhP59GvxXi2dkapQSetWViA5EU4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA')
            no-repeat scroll 5px 5px;
        padding: 0 0 0 29px;
        background-color: ${({ theme }) => theme.palette.secondary.main};
    }
`;

Input.propTypes = {
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
    label: '',
    placeholder: '',
    type: 'default',
    state: 'default',
    width: '256px',
    rows: 2,
    rowsMax: 4,
};

export default Input;
