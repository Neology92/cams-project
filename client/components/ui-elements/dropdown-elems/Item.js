import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    MenuItem,
    ListItemIcon,
    ListItemSecondaryAction,
} from '@material-ui/core';
import Toggle from '../Toggle';
import Icon from '../../Icon';

const Item = ({ icon, label, toggleValue, setToggleValue }) => {
    return (
        <Wrapper>
            {icon ? (
                <ListItemIcon>
                    <Icon component={icon} />
                </ListItemIcon>
            ) : null}
            {label}
            {setToggleValue ? (
                <SecondaryAction>
                    <Toggle value={toggleValue} setValue={setToggleValue} />
                </SecondaryAction>
            ) : null}
        </Wrapper>
    );
};

const Wrapper = styled(MenuItem)`
    && {
        font-size: 14px;
        margin: 2px 0;
        padding: 4px 8px;
        .MuiListItemIcon-root {
            min-width: 30px;
        }
    }
`;

const SecondaryAction = styled(ListItemSecondaryAction)``;

Item.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    toggleValue: PropTypes.bool,
    setToggleValue: PropTypes.func,
};

Item.defaultProps = {
    icon: null,
    label: '',
    toggleValue: false,
    setToggleValue: '',
};

export default Item;
