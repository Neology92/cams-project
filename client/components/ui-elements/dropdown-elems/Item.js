import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    MenuItem,
    ListItemIcon,
    ListItemSecondaryAction as SecondaryAction,
} from '@material-ui/core';
import Toggle from '../Toggle';
import Icon from '../../Icon';

const Item = ({
    width,
    icon,
    label,
    toggleValue,
    setToggleValue,
    disabled,
    ...props
}) => {
    return (
        <Wrapper width={width} disabled={disabled} {...props}>
            {icon ? (
                <ListItemIcon>
                    <Icon component={icon} />
                </ListItemIcon>
            ) : null}

            <span>{label}</span>

            {setToggleValue ? (
                <SecondaryAction>
                    <Toggle
                        disabled={disabled}
                        value={toggleValue}
                        setValue={() => setToggleValue(!toggleValue)}
                    />
                </SecondaryAction>
            ) : null}
        </Wrapper>
    );
};

const Wrapper = styled(MenuItem)`
    && {
        font-size: 14px;
        margin: 4px 0;
        padding: 4px 8px;
        border-radius: 4px;
        width: ${({ width }) => width};

        .MuiListItemIcon-root {
            min-width: 30px;
        }
    }
`;

Item.propTypes = {
    icon: PropTypes.func,
    label: PropTypes.string,
    width: PropTypes.string,
    toggleValue: PropTypes.bool,
    disabled: PropTypes.bool,
    setToggleValue: PropTypes.func,
};

Item.defaultProps = {
    icon: null,
    label: '',
    width: '200px',
    toggleValue: false,
    disabled: false,
    setToggleValue: null,
};

export default Item;
