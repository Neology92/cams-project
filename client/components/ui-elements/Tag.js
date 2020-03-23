import React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import propTypes from 'prop-types';
import Icon from '../Icon';
import { Close } from '../../assets/icons';

class Tag extends React.PureComponent {
    render() {
        const { value, label, onDelete } = this.props;
        return (
            <StyledChip
                value={value}
                label={label}
                onDelete={onDelete}
                deleteIcon={<Icon component={Close} size="8px" />}
            />
        );
    }
}

const StyledChip = styled(Chip)`
    && {
        position: relative;
        height: 20px;
        font-size: 12px;
        margin: 3px 5px;
        background-color: ${({ theme }) => theme.palette.secondary.main};
        color: ${({ theme }) => theme.palette.text.secondary};
        pointer-events: none;

        svg > g > path:nth-child(2) {
            stroke: ${({ theme }) => theme.palette.text.secondary};
            fill: ${({ theme }) => theme.palette.text.secondary};
        }

        &::after {
            content: '';
            height: 20px;
            width: 20px;
            border-radius: 50%;
            display: block;
            position: absolute;
            top: 0px;
            right: 0px;
            z-index: 1;
        }

        :hover ::after {
            transition: background 0.1s ease-in-out;
            background-color: ${({ theme }) => theme.palette.secondary.dark};
        }

        .MuiChip-deleteIcon {
            position: relative;
            z-index: 2;
            pointer-events: auto;
            padding: 4px 2px 4px 2px;
            margin: 0 4px 0 -5px;
        }
    }
`;

Tag.propTypes = {
    value: propTypes.string.isRequired,
    label: propTypes.string,
    onDelete: propTypes.func,
};

Tag.defaultProps = {
    label: '',
    onDelete: () => {},
};

export default Tag;
