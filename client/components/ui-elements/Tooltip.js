import MuiTooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';

const Tooltip = ({ title, children, ...props }) => {
    return (
        <StyledToolTip title={title} arrow {...props}>
            <div>{children}</div>
        </StyledToolTip>
    );
};

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
    title: propTypes.string,
    children: propTypes.node.isRequired,
};

Tooltip.defaultProps = {
    title: '',
};

export default Tooltip;
