import PropTypes from 'prop-types';
import { FormControlLabel, FormGroup, Checkbox } from '@material-ui/core';
import styled from 'styled-components';

const CheckboxGroup = ({ values, setValues, items, label, ...props }) => {
    const handleChange = (event, name) => {
        setValues({
            ...values,
            [name]: event.target.checked,
        });
    };

    return (
        <FormGroup column>
            {items.map(item => (
                <StyledLabel
                    key={item.value}
                    control={
                        <Checkbox
                            checked={values[item.value]}
                            onChange={e => handleChange(e, item.value)}
                            inputProps={{ 'aria-label': item.label }}
                            {...props}
                        />
                    }
                    label={item.label}
                />
            ))}
        </FormGroup>
    );
};
const StyledLabel = styled(FormControlLabel)`
    && {
        .MuiFormControlLabel-label {
            font-size: 14px;
            color: ${({ theme }) => theme.palette.text.primary};
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
    values: PropTypes.string,
    setValues: PropTypes.func.isRequired,
};

CheckboxGroup.defaultProps = {
    label: '',
    items: [],
    values: '',
};

export default CheckboxGroup;
