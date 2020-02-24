import MuiInput from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ color, children, ...props }) => (
    <StyledMuiInput color={color} disableUnderline="true" {...props}>
        {children}
    </StyledMuiInput>
);

const StyledMuiInput = styled(MuiInput)`
    padding: 1px;
    padding-left: 10px;
    font-size: 8px;
    font-weight: 400;
    border-style: solid;
    border-radius: 10px;
    :focus-within {
        border-color: red;
    }
`;

Input.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Input.defaultProps = {
    color: 'default',
};

export default Input;
