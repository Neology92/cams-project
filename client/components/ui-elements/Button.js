import MuiButton from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends React.PureComponent {
    render() {
        const { color, kind, width, children, ...props } = this.props;
        if (kind === 'text') {
            return (
                <StyledMuiButton color={color} {...props} format={kind}>
                    {children}
                </StyledMuiButton>
            );
        }
        return (
            <StyledMuiButton
                variant="contained"
                color={color}
                width={width}
                {...props}
            >
                {children}
            </StyledMuiButton>
        );
    }
}

const StyledMuiButton = styled(MuiButton)`
    && {
        padding: 3px 8px;
        width: ${({ width }) => width};
        font-size: 14px;
        font-weight: 400;
        text-transform: initial;
        box-shadow: none;

        :hover {
            box-shadow: none;
        }

        ${({ color, format, theme }) =>
            color === 'secondary' && format === 'text'
                ? `color: ${theme.palette.text.secondary} !important;`
                : ''}
    }
`;

Button.propTypes = {
    color: PropTypes.string,
    kind: PropTypes.string,
    width: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    color: 'default',
    kind: 'default',
    width: 'inherit',
};

export default Button;
