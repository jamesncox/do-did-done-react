import React from 'react';
import { connect } from 'react-redux'
import CompositionJournal from '../../assets/composition_background.jpg'
import { Link as RouterLink } from 'react-router-dom';

import Copyright from '../Layout/Copyright'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        fontFamily: "'Nanum Pen Script', cursive",
        '& > *': {
            margin: ".1rem",
            width: "99vw",
            height: "98vh",
            [theme.breakpoints.up('sm')]: {
                width: "70vw",
                margin: "auto"
            },
            [theme.breakpoints.up('md')]: {
                width: "50vw",
                margin: "auto"
            },
            [theme.breakpoints.up('lg')]: {
                width: "40vw",
                margin: "auto"
            },
            [theme.breakpoints.up('xl')]: {
                width: "35vw",
                margin: "auto"
            },
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
        marginTop: "25%",
        position: "absolute",
        [theme.breakpoints.up('sm')]: {
            width: "45%",
            marginLeft: "15%",
            marginTop: "10%",
        },
        [theme.breakpoints.up('md')]: {
            width: "30%",
            marginLeft: "11%",
            marginTop: "8%",
        },
        [theme.breakpoints.up('lg')]: {
            width: "20%",
            marginLeft: "11%",
            marginTop: "8%",
        },
        [theme.breakpoints.up('xl')]: {
            width: "20%",
            marginLeft: "9%",
            marginTop: "8%",
        },
    },
    whiteBoxBorder: {
        border: "solid black 2px",
        borderRadius: "3px",
        backgroundColor: "rgba (0, 0, 0, 0)",
        margin: "1em",
        height: "85%",
    },
    title: {
        fontSize: "2.8rem",
        textAlign: "center",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
    },
    signInButton: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "1.8em",
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: "1rem",
        float: "left",
        bottom: "0px"
    },
    signUpButton: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "1.8em",
        fontWeight: "bold",
        marginTop: "1rem",
        float: "right"
    },
    profileButton: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "2em",
        fontWeight: "bold",
    },
    alignCenter: {
        textAlign: "center",
    }
}));

function Home(props) {
    const classes = useStyles();

    if (props.loggedIn === false) {
        return (
            <div className={classes.root}>
                <Paper style={{ backgroundImage: `url("${CompositionJournal}")`, borderRadius: "1.5rem" }}>
                    <Paper className={classes.whiteBox}>
                        <div className={classes.whiteBoxBorder}>
                            <h1 className={classes.title}>
                                Git-R-Done
                            </h1>
                            <Button
                                className={classes.signInButton}
                                color="primary"
                                component={RouterLink}
                                to="/SignIn"
                            >
                                Sign In
                            </Button>
                            <Button
                                className={classes.signUpButton}
                                color="secondary"
                                component={RouterLink}
                                to="/SignUp"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </Paper>
                    <Paper className={classes.blackBorder} />
                    <Copyright />
                </Paper>
            </div >
        )
    } else {
        return (
            <div className={classes.root}>
                <Paper style={{ backgroundImage: `url("${CompositionJournal}")`, borderRadius: "1.5rem" }}>
                    <Paper className={classes.whiteBox}>
                        <div className={classes.whiteBoxBorder}>
                            <h1 className={classes.title}>
                                Git-R-Done
                            </h1>
                            <div className={classes.alignCenter}>
                                <Button
                                    className={classes.profileButton}
                                    color="primary"
                                    component={RouterLink}
                                    to="/Profile"
                                >
                                    Profile
                                </Button>
                            </div>
                        </div>
                    </Paper>
                    <Paper className={classes.blackBorder} />
                    <Copyright />
                </Paper>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.users.loggedIn
})

export default connect(mapStateToProps)(Home)