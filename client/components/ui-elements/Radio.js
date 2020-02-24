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
            <FormLabel>{label}</FormLabel>
            <RadioGroup aria-label={label} name={label}>
                <StyledLabel
                    value="a"
                    control={<StyledRadio color="primary" />}
                    label="First choice"
                    {...props}
                />
                <StyledLabel
                    value="b"
                    control={<StyledRadio color="primary" />}
                    label="You can also Choose here"
                    {...props}
                />
                <StyledLabel
                    value="c"
                    control={<StyledRadio color="primary" />}
                    label="Can You click it?"
                    {...props}
                />
                <StyledLabel
                    value="d"
                    control={<StyledRadio color="primary" />}
                    label="Wiw"
                    {...props}
                />
            </RadioGroup>
        </FormControl>
    );
};

const StyledLabel = styled(FormControlLabel)`
    text-transform: capitalize;
    * {
        font-size: 14px !important;
    }
`;

const StyledRadio = styled(MuiRadio)`
    width: 10px;
`;

Radio.propTypes = {
    label: PropTypes.string.isRequired,
};

export default Radio;
