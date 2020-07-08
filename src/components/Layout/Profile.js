import React from 'react'

import Header from './Header'
import BottomNavigation from './BottomNavigation'
import Page from './Page'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}))


function Profile(props) {
    const classes = useStyles();
    return (
        <>
            <Header />
            <Page />
            <BottomNavigation />
        </>
    )
}

export default Profile 