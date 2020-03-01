import MuiSelect from '@material-ui/core/Select';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    MenuItem,
    InputLabel,
    FormControl,
    InputBase,
} from '@material-ui/core';

// Props:
//  - children: Button Label
//  - items: array of menu items {value: 'string', label:'string'}
class Select extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { setValue } = this.props;
        setValue(e.target.value);
    }

    render() {
        const { value, setValue, label, items, ...props } = this.props;

        return (
            <div>
                <StyledLabel>
                    <em>{label}</em>
                </StyledLabel>
                <FormControl variant="filled">
                    <MuiSelect
                        input={
                            <StyledInput
                                {...props}
                                value={value}
                                onChange={e => this.handleChange(e)}
                            />
                        }
                    >
                        {items.map(item => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </MuiSelect>
                </FormControl>
            </div>
        );
    }
}

const StyledLabel = styled(InputLabel)`
    margin: 8px 0;
    & * {
        color: ${({ theme }) => theme.palette.text.primary};
        text-transform: capitalize;
        font-style: unset;
        font-size: 14px;
        font-weight: 400;
    }
`;

const StyledInput = styled(InputBase)`
    && {
        background: ${({ theme }) => theme.palette.secondary.main};
        min-width: 130px;
        border-radius: 4px;
        position: relative;
        padding: 5px 10px;

        color: ${({ theme }) => theme.palette.text.secondary};
        font-size: 14px !important;

        * {
            font-size: 14px !important;
            background: transparent !important;
        }
        *:focus {
            color: ${({ theme }) => theme.palette.text.primary};
        }
        &:focus-within {
            box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.primary.main} !important;
        }

        transition: background 0.2s ease-in-out;

        &:hover {
            background: ${({ theme }) => theme.palette.secondary.dark};
        }
    }
`;

Select.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired,
};

Select.defaultProps = {
    label: '',
    items: [],
    value: '',
};

export default Select;
