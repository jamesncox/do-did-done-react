import React from 'react'

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    redDivider: {
        backgroundColor: "#ff1744",
        opacity: "10%",
        marginLeft: "4rem",
        position: "fixed",
        width: "3px",
        top: "0",
    },
    redLineZIndex: {
        zIndex: "-1",
        // position: "absolute"
    },

}))


function RedLine(props) {
    const classes = useStyles();
    return (
        <div className={classes.redLineZIndex}>
            <Divider className={classes.redDivider} orientation="vertical" />
        </div>
    )
}

export default RedLine 