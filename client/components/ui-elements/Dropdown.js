import styled from 'styled-components';
import { MenuList } from '@material-ui/core';

import { Divider, Subheader, Item } from './dropdown-elems';

import { Woman, Check, Fire } from '../../assets/icons';

const Dropdown = () => {
    return (
        <StyledMenu>
            <Subheader label="Label" />
            <Item label="Woman" icon={Woman} />
            <Item label="BUmp value" icon={Fire} />
            <Divider />
            <Subheader label="Second label" />
            <Item
                label="Rewiev done"
                icon={Check}
                toggleValue={false}
                setToggleValue={() => {
                    alert('clicked'); //eslint-disable-line
                }}
            />
        </StyledMenu>
    );
};

const StyledMenu = styled(MenuList)`
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

export default Dropdown;
