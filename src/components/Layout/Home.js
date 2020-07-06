import React from 'react';
import CompositionJournal from '../../assets/composition_background.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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
        // zIndex: "1",
        position: "absolute",
    },
    whiteBoxBorder: {
        border: "solid black 2px",
        borderRadius: "3px",
        backgroundColor: "rgba (0, 0, 0, 0)",
        margin: "1em",
        height: "85%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    title: {
        fontSize: "2.8rem",
        alignSelf: "center",
        marginTop: theme.spacing(1)
    },
    signInButton: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "1.8em",
        fontWeight: "bold",
        alignSelf: "flex-end",
    },
    signUpButton: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "1.8em",
        fontWeight: "bold",
        alignSelf: "flex-end",
    }
}));

function Home(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper style={{ backgroundImage: `url("${CompositionJournal}")` }}>
                <Paper className={classes.whiteBox}>
                    <div className={classes.whiteBoxBorder}>
                        <h1 className={classes.title}>
                            Git-R-Done
                        </h1>
                        <Button className={classes.signInButton} color="primary">
                            Sign In
                        </Button>
                        <Button className={classes.signUpButton} color="secondary">
                            Sign Up
                        </Button>
                    </div>
                </Paper>
                <Paper className={classes.blackBorder} />
            </Paper>
        </div >
    )
}

export default Home