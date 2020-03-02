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
                key={value}
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
        pointer-events: none;

        &:hover {
            background-color: ${({ theme }) => theme.palette.secondary.dark};
        }

        svg > g > path:nth-child(2) {
            stroke: ${({ theme }) => theme.palette.text.secondary};
            fill: ${({ theme }) => theme.palette.text.secondary};
        }
        .MuiChip-deleteIcon {
            padding-left: 2px;
            padding-right: 1px;
            pointer-events: auto;
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
