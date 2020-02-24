import MuiSelect from '@material-ui/core/Select';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    MenuItem,
    InputLabel,
    FormControl,
    InputBase,
} from '@material-ui/core';

// Props:
//  - children: Button Label
//  - items: array of menu items {value: 'string', label:'string'}
const Select = ({ value, setValue, label, items, ...props }) => {
    const handleChange = e => {
        setValue(e.target.value);
    };

    return (
        <div>
            <StyledLabel>
                <em>{label}</em>
            </StyledLabel>
            <FormControl variant="filled">
                <MuiSelect
                    input={
                        <StyledInput
                            {...props}
                            value={value}
                            onChange={e => handleChange(e)}
                        />
                    }
                >
                    {items.map(item => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </MuiSelect>
            </FormControl>
        </div>
    );
};

const StyledLabel = styled(InputLabel)`
    margin: 8px 0;
    & * {
        color: ${({ theme }) => theme.palette.text.primary};
        text-transform: capitalize;
        font-style: unset;
        font-size: 14px;
        font-weight: 400;
    }
`;

const StyledInput = styled(InputBase)`
    background: ${({ theme }) => theme.palette.secondary.main};
    min-width: 130px !important;
    border-radius: 10px;
    position: relative;
    padding: 5px 10px;

    color: ${({ theme }) => theme.palette.text.secondary} !important;
    font-size: 14px;

    * {
        background: transparent !important;
    }
    & *:focus {
        color: ${({ theme }) => theme.palette.text.primary};
        border-bottom: 1.5px solid
            ${({ theme }) => theme.palette.secondary.contrastText} !important;
        margin-bottom: -1.5px !important;
    }

    transition: background 0.2s ease-in-out;

    &:hover {
        background: ${({ theme }) => theme.palette.secondary.dark} !important;
    }
`;

Select.propTypes = {
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

Select.defaultProps = {
    label: '',
    items: [],
    value: '',
};

export default Select;
