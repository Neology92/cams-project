import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
    MenuItem,
    ListItemIcon,
    ListItemSecondaryAction as SecondaryAction,
} from '@material-ui/core';
import Toggle from '../Toggle';
import Icon from '../../Icon';

class Item extends React.PureComponent {
    render() {
        const {
            icon,
            label,
            toggle,
            toggleValue,
            setToggleValue,
            disabled,
            ...props
        } = this.props;
        return (
            <>
                {toggle ? (
                    <Wrapper
                        disabled={disabled}
                        onClick={() => setToggleValue(!toggleValue)}
                        {...props}
                    >
                        {icon ? (
                            <ListItemIcon>
                                <Icon component={icon} />
                            </ListItemIcon>
                        ) : null}

                        <span>{label}</span>

                        <SecondaryAction>
                            <Toggle
                                disabled={disabled}
                                value={toggleValue}
                                setValue={setToggleValue}
                            />
                        </SecondaryAction>
                    </Wrapper>
                ) : (
                    <Wrapper disabled={disabled} {...props}>
                        {icon ? (
                            <ListItemIcon>
                                <Icon component={icon} />
                            </ListItemIcon>
                        ) : null}

                        <span>{label}</span>
                    </Wrapper>
                )}
            </>
        );
    }
}

const Wrapper = styled(MenuItem)`
    && {
        font-size: 14px;
        margin: 4px 0;
        padding: 4px 8px;
        border-radius: 4px;

        .MuiListItemIcon-root {
            min-width: 30px;
        }
    }
`;

Item.propTypes = {
    icon: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    toggle: PropTypes.bool,
    toggleValue: PropTypes.bool,
    setToggleValue: PropTypes.func,
};

Item.defaultProps = {
    icon: null,
    label: '',
    disabled: false,
    toggle: false,
    toggleValue: false,
    setToggleValue: () => {},
};

export default Item;
