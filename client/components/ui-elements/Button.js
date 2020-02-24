import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ color, children }) => (
    <StyledMuiButton variant="contained" color={color}>
        {children}
    </StyledMuiButton>
);

const StyledMuiButton = styled(MuiButton)`
    padding: 8px;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Nunito Sans', sans-serif !important;
    text-transform: capitalize !important;
`;

Button.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    color: 'default',
};

export default Button;
