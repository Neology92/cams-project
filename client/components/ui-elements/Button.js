import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ color, children, ...props }) => (
    <StyledMuiButton variant="contained" color={color} {...props}>
        {children}
    </StyledMuiButton>
);

const StyledMuiButton = styled(MuiButton)`
    padding: 8px;
    font-size: 14px;
    font-weight: 400;
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
