import React from 'react';
import CompositionJournal from '../../assets/composition_background.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: ".1rem",
            width: "99vw",
            height: "98vh",
            zIndex: "-1"
        },
    },
    blackBorder: {
        backgroundColor: "rgb(22, 22, 22)",
        width: "4rem",
        height: "98vh"
    },
    whiteBox: {
        backgroundColor: "white",
        width: "70%",
        height: "30%",
        marginLeft: "20%",
        marginTop: "20%",
        zIndex: "1",
        position: "absolute"
    },
    title: {
        textAlign: "center",
        fontSize: "2.5rem",
        marginTop: theme.spacing(1)
    }
}));

function Home(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper style={{ backgroundImage: `url("${CompositionJournal}")` }}>
                <Paper className={classes.whiteBox}>
                    <h1 className={classes.title}>
                        Git-R-Done
                    </h1>
                </Paper>
                <Paper className={classes.blackBorder} />
            </Paper>
        </div >
    )
}

export default Home