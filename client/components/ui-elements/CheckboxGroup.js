import PropTypes from 'prop-types';
import { FormControlLabel, FormGroup, Checkbox } from '@material-ui/core';
import styled from 'styled-components';

class CheckboxGroup extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, name) {
        const { values, setValues } = this.props;

        setValues({
            ...values,
            [name]: event.target.checked,
        });
    }

    render() {
        const { values, setValues, items, label, row, ...props } = this.props;

        return (
            <FormGroup row={row}>
                {items.map(item => (
                    <StyledLabel
                        key={item.value}
                        control={
                            <Checkbox
                                checked={values[item.value]}
                                onChange={e => this.handleChange(e, item.value)}
                                inputProps={{ 'aria-label': item.label }}
                                {...props}
                            />
                        }
                        label={item.label}
                    />
                ))}
            </FormGroup>
        );
    }
}
const StyledLabel = styled(FormControlLabel)`
    && {
        .MuiFormControlLabel-label {
            font-size: 14px;
            color: ${({ theme }) => theme.palette.text.primary};
        }
    }
`;

CheckboxGroup.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    label: PropTypes.string,
    row: PropTypes.bool,
    values: PropTypes.objectOf(PropTypes.bool),
    setValues: PropTypes.func.isRequired,
};

CheckboxGroup.defaultProps = {
    label: '',
    row: false,
    items: [],
    values: {},
};

export default CheckboxGroup;
