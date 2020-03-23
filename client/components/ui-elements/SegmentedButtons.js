import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

class SegmentedButtons extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        const { setValue } = this.props;

        if (newValue) {
            setValue(newValue);
        }
    }

    render() {
        const { value, setValue, label, items, ...props } = this.props;

        return (
            <StyledGroup
                value={value}
                exclusive
                onChange={this.handleChange}
                {...props}
                label={label}
            >
                {items.map(item => (
                    <ToggleButton
                        key={item.value}
                        aria-label={item.label}
                        value={item.value}
                    >
                        {item.label}
                    </ToggleButton>
                ))}
            </StyledGroup>
        );
    }
}

const StyledGroup = styled(ToggleButtonGroup)`
    && {
        button {
            height: 37px;
            padding: 4px 18px;
            font-size: 14px;
            font-weight: 400;
            text-transform: capitalize !important;
            box-shadow: none !important;
            color: ${({ theme }) => theme.palette.primary.main};
            border: 1px solid ${({ theme }) => theme.palette.primary.main};
            :hover {
                background: ${({ theme }) => theme.palette.secondary.light};
            }
        }

        .Mui-selected {
            background: ${({ theme }) => theme.palette.primary.main};
            color: ${({ theme }) => theme.palette.primary.contrastText};

            :hover {
                background: ${({ theme }) => theme.palette.primary.dark};
            }
        }
    }
`;

SegmentedButtons.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
};
SegmentedButtons.defaultProps = {
    label: '',
    items: [],
};

export default SegmentedButtons;
