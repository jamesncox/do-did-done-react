import React from 'react'

import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    // topDivider: {
    //     backgroundColor: "#81d4fa",
    //     opacity: "50%",
    //     marginTop: theme.spacing(10),
    //     marginBottom: theme.spacing(5),
    //     position: "absolute",
    //     height: "2px"
    // },
    // blueDivider: {
    //     backgroundColor: "#81d4fa",
    //     opacity: "50%",
    //     marginBottom: theme.spacing(5),
    //     height: "2px",
    //     position: "absolute"
    // },
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
    // blueLineZIndex: {
    //     zIndex: "-2",
    //     // position: "absolute"
    // },
}))


function Page(props) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.redLineZIndex}>
                <Divider className={classes.redDivider} orientation="vertical" />
            </div>
            {/* <div className={classes.blueLineZIndex}>
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
            </div> */}
        </>
    )
}

export default Page 