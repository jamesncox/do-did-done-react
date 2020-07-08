import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import LogOutAlert from '../User/LogOutAlert'
import AddCategory from '../Category/AddCategory'

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';

import FolderIcon from '@material-ui/icons/Folder';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        position: "fixed",
        bottom: "0",
        overflow: "hidden",
        backgroundColor: "#448aff",
        [theme.breakpoints.up('md')]: {
            display: "none",
        },
    },
    icons: {
        color: "white",
    },
    personIcon: {
        fontSize: "1.5rem"
    },
    homeIcon: {
        fontSize: "1.5rem"
    },
}));

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('')

    const [showLogoutAlert, setShowLogoutAlert] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLogoutAlert = () => {
        if (!showLogoutAlert) {
            setShowLogoutAlert(true)
        } else {
            setShowLogoutAlert(false)
        }
    }

    return (
        <>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction
                    className={classes.icons}
                    label="Home" value="home"
                    component={RouterLink} to="/"
                    icon={<HomeIcon className={classes.homeIcon} />}
                />
                <BottomNavigationAction
                    className={classes.icons}
                    label="Profile" value="profile"
                    component={RouterLink} to="/Profile"
                    icon={<PersonIcon className={classes.personIcon} />}
                />
                <BottomNavigationAction
                    className={classes.icons}
                    label="Add List"
                    value="addCategory"
                    icon={<AddCategory />}
                />
                <BottomNavigationAction
                    className={classes.icons}
                    label="Log Out"
                    value="logout"
                    icon={<LogOutAlert />}
                    onClick={handleLogoutAlert}
                />
            </BottomNavigation>
        </>
    );
}