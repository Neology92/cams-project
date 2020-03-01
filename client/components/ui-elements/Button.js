import MuiButton from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends React.PureComponent {
    render() {
        const { color, type, children, ...props } = this.props;
        if (type === 'text') {
            return (
                <StyledMuiButton color={color} {...props} format={type}>
                    {children}
                </StyledMuiButton>
            );
        }
        return (
            <StyledMuiButton variant="contained" color={color} {...props}>
                {children}
            </StyledMuiButton>
        );
    }
}

const StyledMuiButton = styled(MuiButton)`
    padding: 8px;
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize !important;
    box-shadow: none !important;

    ${({ color, format, theme }) =>
        color === 'secondary' && format === 'text'
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
