import React from 'react';
import PropTypes from 'prop-types';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import Toggle from '../ui-elements/Toggle';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menu: {
        marginTop: '48px',
        // marginTop: theme.spacing(6),
    },
    appbar: {
        background: theme.palette.background.default,
        color: theme.palette.text.secondary,
    },
}));

export default function Navbar({ switchColorsMode }) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [toggleState, setToggleState] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const switchToggle = val => {
        setToggleState(val);
        switchColorsMode();
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        nok
                    </Typography>
                    <div>
                        <Toggle setValue={switchToggle} value={toggleState} />
                    </div>

                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            edge="end"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            className={classes.menu}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                                My account
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Navbar.propTypes = {
    switchColorsMode: PropTypes.func.isRequired,
};
