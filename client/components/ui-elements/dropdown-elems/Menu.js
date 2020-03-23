import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MenuList } from '@material-ui/core';

const Menu = styled(({ width, ...props }) => (
    <MenuList width={width} {...props} />
))`
    && {
        padding: 8px;
        width: ${({ width }) => width};
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        background: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};

        svg > g > path:nth-child(2) {
            fill: ${({ theme }) => theme.palette.text.primary};
        }
    }
`;

Menu.propTypes = {
    width: PropTypes.string,
};

Menu.defaultProps = {
    width: '232px',
};

export default Menu;
