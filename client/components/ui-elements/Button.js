import MuiButton from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ color, type, children, ...props }) => {
    if (type === 'select') {
        return (
            <StyledMuiButton variant="contained" color={color} {...props}>
                {children}
            </StyledMuiButton>
        );
    }
    if (type === 'text') {
        return (
            <StyledMuiButton color={color} {...props} type="text">
                {children}
            </StyledMuiButton>
        );
    }
    return (
        <StyledMuiButton variant="contained" color={color} {...props}>
            {children}
        </StyledMuiButton>
    );
};

const StyledMuiButton = styled(MuiButton)`
    padding: 8px;
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize !important;

    ${({ color, type, theme }) =>
        color === 'secondary' && type === 'text'
            ? `color: ${theme.palette.text.secondary} !important;`
            : ''}
`;

Button.propTypes = {
    color: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    color: 'default',
    type: 'default',
};

export default Button;
