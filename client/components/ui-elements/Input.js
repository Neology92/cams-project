import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputBase, InputLabel, FormControl } from '@material-ui/core';

const Input = ({ label, placeholder, ...props }) => {
    const [value, setValue] = useState('');

    return (
        <div>
            <div>
                <StyledLabel>{label}</StyledLabel>
            </div>
            <FormControl>
                <StyledInput
                    value={value}
                    placeholder={placeholder}
                    onChange={e => setValue(e.target.value)}
                    {...props}
                />
            </FormControl>
        </div>
    );
};

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
        position: relative;
        border: 1px solid ${({ theme }) => theme.palette.secondary.main};
        background-color: ${({ theme }) => theme.palette.secondary.main};
        border-radius: 4px;
        height: 30px;
        width: 250px;
        font-size: 14px;
        padding: 0 0 0 4px;
        transition: ${({ theme }) =>
            theme.transitions.create(['border-color'])};

        &:focus {
            border-color: ${({ theme }) => theme.palette.primary.main};
        }
    }
`;

Input.propTypes = {
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    label: '',
    placeholder: '',
};

export default Input;
