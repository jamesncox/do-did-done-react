import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    root: {
        width: "100%",
        margin: "auto",
        position: "fixed",
        bottom: "0",
        overflow: "hidden"
    }
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="home" component={RouterLink} to="/" icon={<HomeIcon />} />
            <BottomNavigationAction label="Profile" value="profile" component={RouterLink} to="/Profile" icon={<PersonIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}