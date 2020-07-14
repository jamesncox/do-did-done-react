import React from 'react'

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    topDivider: {
        backgroundColor: "#81d4fa",
        opacity: "40%",
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(5),
        position: "fixed",
        height: "2px",
        // top: 50
        // zIndex: "-2",
    },
    blueDivider: {
        backgroundColor: "#81d4fa",
        opacity: "40%",
        marginBottom: theme.spacing(5),
        height: "2px",
        position: "fixed",
        // zIndex: "-2",
    },
    blueLineZIndex: {
        position: "absolute",
        zIndex: "-2"
    },
}))


function BlueLines(props) {
    const classes = useStyles();
    return (
        <div className={classes.blueLineZIndex}>
            <Divider className={classes.topDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
            <Divider className={classes.blueDivider} />
        </div>
    )
}

export default BlueLines 