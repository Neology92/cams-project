import { useState } from 'react';
import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const items = [
    { value: '1', label: 'First Button' },
    { value: '2', label: 'Second button' },
    { value: '3', label: 'Thrid button' },
    { value: '4', label: 'Next one' },
];

const SegmentedButtons = () => {
    const [state, setState] = useState('1');

    const handleChange = (e, newState) => {
        if (newState) {
            setState(newState);
        }
    };

    return (
        <StyledGroup value={state} exclusive onChange={handleChange}>
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
};

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

export default SegmentedButtons;
