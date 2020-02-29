import styled from 'styled-components';
import { MenuList } from '@material-ui/core';

const Menu = styled(MenuList)`
    && {
        padding: 8px;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.16);
        border-radius: 4px;
        background: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text.primary};

        svg > g > path:nth-child(2) {
            fill: ${({ theme }) => theme.palette.text.primary};
        }
    }
`;
export default Menu;
