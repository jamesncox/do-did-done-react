import React from 'react'

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    topDivider: {
        backgroundColor: "#81d4fa",
        opacity: "50%",
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(5),
    },
    blueDivider: {
        backgroundColor: "#81d4fa",
        opacity: "50%",
        marginBottom: theme.spacing(5),
    },
    redDivider: {
        backgroundColor: "#ff1744",
        opacity: "20%",
        marginLeft: "4rem",
        position: "absolute",
        top: "0"
    }

}))


function Page(props) {
    const classes = useStyles();
    return (
        <>
            <Divider className={classes.redDivider} orientation="vertical" />
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
        </>
    )
}

export default Page 