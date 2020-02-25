import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, FormGroup, Checkbox } from '@material-ui/core';
import styled from 'styled-components';

const CheckboxGroup = ({ value, label, ...props }) => {
    const [checked, setChecked] = useState(true);

    const handleChange = event => {
        setChecked(event.target.checked);
    };

    return (
        <FormGroup column>
            <StyledLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={e => handleChange(e)}
                        inputProps={{ 'aria-label': value }}
                        {...props}
                    />
                }
                label={label}
            />
            <StyledLabel
                control={
                    <Checkbox
                        checked={checked}
                        onChange={e => handleChange(e)}
                        inputProps={{ 'aria-label': value }}
                        {...props}
                    />
                }
                label={label}
            />
        </FormGroup>
    );
};
const StyledLabel = styled(FormControlLabel)`
    && {
        span {
            font-size: 14px;
        }
    }
`;

CheckboxGroup.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired,
};

CheckboxGroup.defaultProps = {
    label: '',
    items: [],
    value: '',
};

export default CheckboxGroup;
