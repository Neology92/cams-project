import PropTypes from 'prop-types';
import styled from 'styled-components';
import { InputBase, InputLabel, FormControl } from '@material-ui/core';

// Prop "type" takes string and defines type of input.
// Empty for normal input and search for search input
const Input = ({ label, value, setValue, placeholder, type, ...props }) => {
    const handleChange = e => {
        setValue(e.target.value);
    };

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
                    onChange={e => handleChange(e)}
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

    .MuiInputBase-inputTypeSearch {
        background: url('https://resources-live.sketch.cloud/files/22d56c79-8cd4-4f44-ade6-61b84950f754.png?Expires=1582938000&Signature=oFe0cOV3MTv8n5m-TkjTZydrcWTT0HGjvjqSrXv8nhPe0qv3OAyV0uJ~EanqvetygDPa9yAxenq3soqYzwdqjpafkoZMVfQ1TBlma-yKs7SdnUz45pg1D2CZjaePQvak5oRDT6~HAIcWgXbKEhP59GvxXi2dkapQSetWViA5EU4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA')
            no-repeat scroll 5px 5px;
        padding: 0 0 0 29px;
        background-color: ${({ theme }) => theme.palette.secondary.main};
    }
`;

Input.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

Input.defaultProps = {
    label: '',
    placeholder: '',
    type: '',
};

export default Input;
