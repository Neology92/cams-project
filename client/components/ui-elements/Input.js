import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

const Input = ({ value, label, placeholder }) => (
    <div>
        <StyledLabel shrink>{label}</StyledLabel>
        <StyledInput value={value} placeholder={placeholder} />
    </div>
);

const StyledLabel = styled(InputLabel)`
    && {
        color: ${({ theme }) => theme.palette.text.primary} !important;
        font-size: 16px !important;
        float: left;
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
        font-size: 14px;
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
