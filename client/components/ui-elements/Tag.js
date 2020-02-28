import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import propTypes from 'prop-types';
import Icon from '../Icon';
import { Close } from '../../assets/icons';

const Tag = ({ chipData, setChipData }) => {
    const handleDelete = chipToDelete => () => {
        setChipData(chips =>
            chips.filter(chip => chip.key !== chipToDelete.key)
        );
    };

    return (
        <div>
            {chipData.map(data => {
                return (
                    <StyledChip
                        key={data.key}
                        label={data.label}
                        onDelete={handleDelete(data)}
                        deleteIcon={
                            <Icon
                                component={Close}
                                size="8px"
                                color="secondary"
                            />
                        }
                    />
                );
            })}
        </div>
    );
};

const StyledChip = styled(Chip)`
    && {
        height: 20px;
        font-size: 12px;
        margin: 3px 5px 3px 5px;
        background-color: ${({ theme }) => theme.palette.secondary.main};
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;

Tag.propTypes = {
    setChipData: propTypes.func.isRequired,
    chipData: propTypes.arrayOf(
        propTypes.shape({
            key: propTypes.number.isRequired,
            label: propTypes.string.isRequired,
        })
    ),
};

Tag.defaultProps = {
    chipData: [],
};

export default Tag;
