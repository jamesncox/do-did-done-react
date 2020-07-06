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
        },
    },
    blackBorder: {
        backgroundColor: "rgb(22, 22, 22)",
        width: "4rem",
        height: "98vh"
    },
    whiteBox: {
        backgroundColor: "white",
        width: "10rem",
        height: "5rem"
    }
}));

function Home(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper style={{ backgroundImage: `url("${CompositionJournal}")` }}>
                <Paper className={classes.blackBorder} />
                <Paper className={classes.whiteBox}>

                </Paper>
            </Paper>
        </div >
    )
}

export default Home