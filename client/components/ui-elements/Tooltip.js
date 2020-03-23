import React from 'react';
import MuiTooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';

class Tooltip extends React.PureComponent {
    render() {
        const { label, children, ...props } = this.props;
        return (
            <StyledToolTip title={label} arrow {...props}>
                <div>{children}</div>
            </StyledToolTip>
        );
    }
}

const StyledToolTip = withStyles(theme => ({
    tooltip: {
        backgroundColor: theme.palette.secondary.contrastText,
        color: theme.palette.primary.contrastText,
        fontSize: '12px',
    },
    arrow: {
        color: theme.palette.secondary.contrastText,
    },
}))(MuiTooltip);

Tooltip.propTypes = {
    label: propTypes.string,
    children: propTypes.node.isRequired,
};

Tooltip.defaultProps = {
    label: '',
};

export default Tooltip;
