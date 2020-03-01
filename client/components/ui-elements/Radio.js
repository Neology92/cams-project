import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuiRadio from '@material-ui/core/Radio';
import {
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
} from '@material-ui/core';

class Radio extends React.PureComponent {
    render() {
        const { value, setValue, label, items, ...props } = this.props;
        const handleChange = e => {
            setValue(e.target.value);
        };

        return (
            <FormControl>
                {label ? <StyledLabel>{label}</StyledLabel> : null}
                <RadioGroup
                    aria-label={label}
                    name={label}
                    value={value}
                    onChange={e => handleChange(e)}
                >
                    {items.map(item => (
                        <RadioLabel
                            key={item.value}
                            value={item.value}
                            label={item.label}
                            control={<MuiRadio color="primary" />}
                            {...props}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        );
    }
}
const StyledLabel = styled(FormLabel)`
    && {
        margin: 8px 0;
        text-align: left;
        color: ${({ theme }) => theme.palette.text.primary};
        padding: 0;
        font-size: 14px;

        * {
            text-transform: capitalize;
            font-style: unset;
            font-weight: 400;
        }
    }
`;

const RadioLabel = styled(FormControlLabel)`
    && {
        text-transform: capitalize;
        margin: 0;

        span {
            font-size: 14px;
        }
    }
`;

Radio.propTypes = {
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

Radio.defaultProps = {
    label: '',
    items: [],
    value: '',
};

export default Radio;
