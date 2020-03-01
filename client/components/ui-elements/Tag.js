import React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import propTypes from 'prop-types';
import Icon from '../Icon';
import { Close } from '../../assets/icons';

class Tag extends React.PureComponent {
    render() {
        const { key, label, onDelete } = this.props;
        return (
            <StyledChip
                key={key}
                label={label}
                onDelete={onDelete}
                deleteIcon={<Icon component={Close} size="8px" />}
            />
        );
    }
}

const StyledChip = styled(Chip)`
    && {
        height: 20px;
        font-size: 12px;
        margin: 3px 5px;
        background-color: ${({ theme }) => theme.palette.secondary.main};
        color: ${({ theme }) => theme.palette.text.secondary};

        svg > g > path:nth-child(2) {
            stroke: ${({ theme }) => theme.palette.text.secondary};
            fill: ${({ theme }) => theme.palette.text.secondary};
        }
        .MuiChip-deleteIcon {
            padding-left: 2px;
            padding-right: 1px;
        }
        &:hover {
            background-color: ${({ theme }) => theme.palette.secondary.dark};
        }
    }
`;

Tag.propTypes = {
    key: propTypes.string.isRequired,
    label: propTypes.string,
    onDelete: propTypes.func,
};

Tag.defaultProps = {
    label: '',
    onDelete: () => {},
};

export default Tag;
