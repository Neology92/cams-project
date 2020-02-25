import PropTypes from 'prop-types';
import styled from 'styled-components';

import MuiRadio from '@material-ui/core/Radio';
import {
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
} from '@material-ui/core';

const Radio = ({ label, ...props }) => {
    return (
        <FormControl>
            {label ? <StyledLabel>{label}</StyledLabel> : null}
            <RadioGroup aria-label={label} name={label}>
                <RadioLabel
                    value="a"
                    control={<MuiRadio color="primary" />}
                    label="First choice"
                    {...props}
                />
                <RadioLabel
                    value="b"
                    control={<MuiRadio color="primary" />}
                    label="You can also Choose here"
                    {...props}
                />
                <RadioLabel
                    value="c"
                    control={<MuiRadio color="primary" />}
                    label="Can You click it?"
                    {...props}
                />
                <RadioLabel
                    value="d"
                    control={<MuiRadio color="primary" />}
                    label="Wiw"
                    {...props}
                />
            </RadioGroup>
        </FormControl>
    );
};

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
    label: PropTypes.string,
};

Radio.defaultProps = {
    label: '',
};

export default Radio;
