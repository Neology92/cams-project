import PropTypes from 'prop-types';

import { Switch, FormControl, FormControlLabel } from '@material-ui/core';

const Toggle = ({ value, setValue, label, color }) => {
    const handleChange = v => {
        setValue(!v);
    };

    return (
        <FormControl>
            <FormControlLabel
                control={
                    <Switch
                        checked={value}
                        onChange={() => handleChange(value)}
                        value={value}
                        color={color}
                    />
                }
                label={label}
            />
        </FormControl>
    );
};

Toggle.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.bool,
    setValue: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
    color: 'primary',
    label: '',
    value: false,
};

export default Toggle;
