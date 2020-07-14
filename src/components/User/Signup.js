import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { Redirect } from "react-router";
import { signupUser, clearIsUserLoading } from '../../actions/users'

import Errors from '../Layout/Errors'
import Copyright from '../Layout/Copyright'
import BackdropLoader from '../Layout/BackdropLoader'

import HeaderLogin from '../Layout/HeaderLogin'
import NavBarLogin from '../Layout/NavBarLogin'
import Title from '../Layout/Title'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing(16)
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#0d47a1"
    },
}));

function SignUp(props) {
    const classes = useStyles();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordConfirmation = (e) => {
        setPasswordConfirmation(e.target.value)
    }

    const handleLogin = e => {
        e.preventDefault()
        const user = {
            username: username,
            password: password,
            password_confirmation: passwordConfirmation
        }
        props.signupUser(props.token, user)
        setUsername('')
        setPassword('')
        setPasswordConfirmation('')
    }

    if (props.loggedIn === true) {
        return (
            <Redirect to="/MyLists" />
        )
    } else {
        return (
            <>
                <HeaderLogin />
                <Errors />
                {props.loadingUser === true ? <BackdropLoader /> : null}
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Title />
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form
                            className={classes.form}
                            noValidate
                            onSubmit={e => handleLogin(e)}
                        >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                onChange={handleUsername}
                                value={username}
                            // autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handlePassword}
                                value={password}
                                autoComplete="current-password"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="passwordConfirmation"
                                label="Confirm Password"
                                type="password"
                                id="passwordConfirmation"
                                onChange={handlePasswordConfirmation}
                                value={passwordConfirmation}
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            <Grid container justify="center">
                                <Grid item>
                                    <Link component={RouterLink} to="/SignIn" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container >
                <NavBarLogin />
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
    // errors: state.errors.errors,
    loggedIn: state.users.loggedIn,
    token: state.sessions.token,
    loadingUser: state.users.loadingUser
})


export default connect(mapStateToProps, { signupUser, clearIsUserLoading })(SignUp)