import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, FormControl } from '@material-ui/core';

const Toggle = ({ value, setValue, color }) => {
    const handleChange = v => {
        setValue(!v);
    };

    return (
        <FormControl>
            <IOSSwitch
                checked={value}
                onChange={() => handleChange(value)}
                value={value}
                color={color}
            />
        </FormControl>
    );
};

const IOSSwitch = styled(Switch)`
    && {
        width: 42px;
        height: 22px;
        padding: 0;
        border-radius: 12px;

        .MuiSwitch {
            &-switchBase {
                padding: 1px;
            }

            &-thumb {
                border: ${({ theme }) => theme.palette.primary.main} !important;
                width: 20px;
                height: 20px;
                background: ${({ theme }) => theme.palette.common.white};
            }

            &-track {
                background-color: ${({ theme }) => theme.palette.primary.main};
                opacity: 1 !important;
            }
        }
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
