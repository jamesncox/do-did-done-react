import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';

import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
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
        // color: "#757575",
        color: "white",
    },
    personIcon: {
        fontSize: "1.5rem"
    },
    homeIcon: {
        fontSize: "1.5rem"
    }
}));

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
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
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                className={classes.icons}
                label="Folder"
                value="folder"
                icon={<FolderIcon />}
            />
        </BottomNavigation>
    );
}