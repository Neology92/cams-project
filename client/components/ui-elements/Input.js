import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const Input = ({ label, color, children, ...props }) => (
    <FormControl margin="none">
        <StyledMuiInputLabel shrink htmlFor="my-input">
            {label}
        </StyledMuiInputLabel>
        <StyledMuiInput
            placeholder="Placeholder"
            size="small"
            id="my-input"
            color={color}
            {...props}
        >
            {children}
        </StyledMuiInput>
    </FormControl>
);

const StyledMuiInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(2),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.secondary.main,
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        fontSize: 12,
        paddingLeft: 5,
        width: 200,
        transition: theme.transitions.create(['border-color']),
        // Use the system font instead of the default Roboto font.

        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const StyledMuiInputLabel = withStyles(theme => ({
    root: {
        color: `${theme.palette.secondary.contrastText} !important`,
    },
}))(InputLabel);

Input.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    size: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.string,
};

Input.defaultProps = {
    size: 'small',
    color: 'default',
    variant: 'outlined',
    label: 'label',
};

export default Input;
