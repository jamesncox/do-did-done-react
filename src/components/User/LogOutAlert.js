import React from 'react'

import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    logoutAlert: {
        marginTop: theme.spacing(2),
        width: "20em",
        margin: "auto"
    }
}))

function LogOutAlert(props) {
    const classes = useStyles();

    return (
        <Alert className={classes.logoutAlert} variant="filled" severity="warning">
            Are you sure you want to log out?
        </Alert>
    )
}

export default LogOutAlert