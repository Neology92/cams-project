import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch } from '@material-ui/core';

class Toggle extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(v) {
        const { setValue } = this.props;
        setValue(!v);
    }

    render() {
        const { value, setValue, color, ...props } = this.props;

        return (
            <IOSSwitch
                checked={value}
                onChange={() => this.handleChange(value)}
                value={value}
                color={color}
                {...props}
            />
        );
    }
}

const IOSSwitch = styled(Switch)`
    && {
        width: 42px;
        height: 22px;
        padding: 0;
        border-radius: 12px;
        overflow: visible;

        .MuiSwitch {
            &-switchBase {
                padding: 1px;
            }

            &-thumb {
                width: 20px;
                height: 20px;

                background: ${({ disabled, theme }) =>
                    disabled
                        ? theme.palette.secondary.main
                        : theme.palette.common.white};
            }

            &-track {
                border-radius: 12px;
                background-color: ${({ value, theme }) =>
                    value
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main};
                opacity: ${({ disabled }) =>
                    disabled ? '0.2' : '1'} !important;
            }
        }
    }

    .MuiTouchRipple {
        &-root {
            overflow: visible;
        }

        &-child {
            width: 40px;
            height: 40px;
            margin: -8px 0 0 -8px;
            /* width: 15px; */
            /* height: 15px; */

            background: ${({ theme }) => theme.palette.primary.main};
        }
        /* :focus-within {
            .MuiSwitch-thumb {

            }
        }  */
    }
`;

Toggle.propTypes = {
    color: PropTypes.string,
    value: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
    color: 'primary',
    value: false,
};

export default Toggle;
