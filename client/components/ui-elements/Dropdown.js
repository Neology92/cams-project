import styled from 'styled-components';
import {
    MenuList,
    MenuItem,
    ListItemIcon,
    ListSubheader,
    Divider,
    ListItemSecondaryAction,
} from '@material-ui/core';
import Toggle from './Toggle';
import Icon from '../Icon';
import { Woman, Check, Fire } from '../../assets/icons';

const Dropdown = () => {
    return (
        <StyledMenu>
            <StyledSubheader>
                <span>Label</span>
            </StyledSubheader>
            <StyledItem>
                <ListItemIcon>
                    <Icon component={Woman} />
                </ListItemIcon>
                Somethinaaaa
                <SecondaryAction>
                    <Toggle />
                </SecondaryAction>
            </StyledItem>
            <StyledItem>
                <ListItemIcon>
                    <Icon component={Fire} />
                </ListItemIcon>
                Second option
            </StyledItem>
            <StyledDivider />

            <StyledSubheader>
                <span>Second section</span>
            </StyledSubheader>
            <StyledItem>
                <ListItemIcon>
                    <Icon component={Check} />
                </ListItemIcon>
                and mate
            </StyledItem>
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

const StyledItem = styled(MenuItem)`
    && {
        font-size: 14px;
        margin: 2px 0;
        padding: 4px 8px;
        .MuiListItemIcon-root {
            min-width: 30px;
        }
    }
`;

const StyledSubheader = styled(ListSubheader)`
    && {
        padding: 0;
        text-align: left;
        height: 25px;
        position: relative;

        span {
            position: absolute;
            top: -15px;
            height: 12px;
            min-height: 0;
        }
    }
`;

const SecondaryAction = styled(ListItemSecondaryAction)``;

const StyledDivider = styled(Divider)`
    && {
        margin: 6px 0 5px;
    }
`;

export default Dropdown;
