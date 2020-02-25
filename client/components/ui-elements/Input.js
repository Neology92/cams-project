import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Input = ({ value, label, placeholder }) => (
    <FormControl>
        <StyledLabel shrink>{label}</StyledLabel>
        <StyledInput value={value} placeholder={placeholder} />
    </FormControl>
);

const StyledLabel = styled(InputLabel)`
    && {
        margin: -15px 0px;
        color: ${({ theme }) => theme.palette.text.primary} !important;
        font-size: 16px !important;
    }
`;
const StyledInput = styled(InputBase)`
    .MuiInputBase-input {
        position: relative;
        border: 1px solid ${({ theme }) => theme.palette.secondary.main};
        background-color: ${({ theme }) => theme.palette.secondary.main};
        border-radius: 4px;
        min-height: 13px;
        min-width: 200px;
        font-size: 12px;
        padding-left: 4px;
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
