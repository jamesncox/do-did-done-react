import React, { useState } from 'react'

import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom';
import { clearCurrentUser, signupUser } from '../../actions/users'
import { getToken } from '../../actions/sessions'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Alert from '@material-ui/lab/Alert';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#448aff",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },
    menuButton: {
        display: "none",
        [theme.breakpoints.down('sm')]: {
            display: "block",
        }
    },
    title: {
        fontFamily: "'Nanum Pen Script', cursive",
        flexGrow: 1,
        marginLeft: "23rem",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0rem",
        }

    },
    loggedInTitle: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "2rem",
        flexGrow: 1,
        marginLeft: "46%",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0rem",
        }
    },
    userActions: {
        display: "block",
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "1.5rem",
        [theme.breakpoints.down('sm')]: {
            display: "none",
        }
    },
    logoutAlert: {
        marginTop: theme.spacing(20),
        width: "20em",
        margin: "auto"
    }
}));

function Header(props) {
    const classes = useStyles();

    const [showLogoutAlert, setShowLogoutAlert] = useState(false)

    const handleLogoutAlert = () => {
        if (!showLogoutAlert) {
            setShowLogoutAlert(true)
        } else {
            setShowLogoutAlert(false)
        }
    }

    const handleLogout = () => {
        props.clearCurrentUser()
        props.getToken()
    }

    // const handleBoth = () => {
    //     handleLogout()
    //     handleClose()
    // }

    const randomNumber = () => {
        const rand = Math.floor((Math.random() * 1000000) + 1)
        return rand.toString()
    }

    const handleGuestSignUp = e => {
        e.preventDefault()
        const user = {
            username: "Guest" + randomNumber(),
            password: "guest",
            password_confirmation: "guest"
        }
        props.signupUser(props.token, user)
    }

    const handleCloseAndGuestSignUp = e => {
        e.preventDefault()
        const user = {
            username: "Guest" + randomNumber(),
            password: "guest",
            password_confirmation: "guest"
        }
        props.signupUser(props.token, user)
        // setAnchorEl(null);
    }

    // if (props.loggedIn === false) {
    //     return (
    //         <>
    //             <CssBaseline />
    //             <AppBar>
    //                 <Toolbar>
    //                     <IconButton
    //                         aria-controls="simple-menu"
    //                         aria-haspopup="true"
    //                         onClick={handleClick}
    //                         edge="start"
    //                         className={classes.menuButton}
    //                         color="inherit"
    //                         aria-label="menu"
    //                     >
    //                         <MenuIcon />
    //                     </IconButton>
    //                     <Menu
    //                         id="simple-menu"
    //                         anchorEl={anchorEl}
    //                         keepMounted
    //                         open={Boolean(anchorEl)}
    //                         onClose={handleClose}
    //                     >
    //                         <MenuItem
    //                             component={RouterLink}
    //                             to="/"
    //                             onClick={handleClose}
    //                         >
    //                             Home
    //                         </MenuItem>
    //                         <MenuItem
    //                             component={RouterLink}
    //                             to="/SignIn"
    //                             onClick={handleClose}
    //                         >
    //                             Sign In
    //                         </MenuItem>
    //                         <MenuItem
    //                             component={RouterLink}
    //                             to="/SignUp"
    //                             onClick={handleClose}
    //                         >
    //                             Sign Up
    //                         </MenuItem>
    //                         <MenuItem
    //                             component={RouterLink}
    //                             to="/"
    //                             onClick={handleCloseAndGuestSignUp}
    //                         >
    //                             Guest
    //                         </MenuItem>
    //                     </Menu>
    //                     <Typography variant="h6" className={classes.title}>
    //                         Git-R-Done
    //                     </Typography>
    //                     <Button
    //                         className={classes.userActions}
    //                         color="inherit"
    //                         component={RouterLink}
    //                         to="/"
    //                     >
    //                         Home
    //                     </Button>
    //                     <Button
    //                         className={classes.userActions}
    //                         color="inherit"
    //                         component={RouterLink}
    //                         to="/SignIn"
    //                     >
    //                         Sign In
    //                     </Button>
    //                     <Button
    //                         className={classes.userActions}
    //                         color="inherit"
    //                         component={RouterLink}
    //                         to="/SignUp"
    //                     >
    //                         Sign Up
    //                     </Button>
    //                     <Button
    //                         className={classes.userActions}
    //                         color="inherit"
    //                         onClick={handleGuestSignUp}
    //                         component={RouterLink}
    //                         to="/"
    //                     >
    //                         Try as Guest
    //                     </Button>
    //                 </Toolbar>
    //             </AppBar>
    //             <Toolbar id="back-to-top-anchor" />
    //             <ScrollTop {...props}>
    //                 <Fab color="secondary" size="small" aria-label="scroll back to top">
    //                     <KeyboardArrowUpIcon />
    //                 </Fab>
    //             </ScrollTop>
    //         </>
    //     )
    // } else {
    return (
        <>
            <CssBaseline />
            <AppBar >
                <Toolbar className={classes.root} >
                    <Typography variant="h6" className={classes.loggedInTitle}>
                        GIT-R-DONE
                    </Typography>
                    <Button
                        className={classes.userActions}
                        color="inherit"
                        component={RouterLink}
                        to="/"
                    >
                        Home
                    </Button>
                    <Button
                        className={classes.userActions}
                        onClick={handleLogout}
                        color="inherit"
                        component={RouterLink}
                        to="/Profile"
                    >
                        Profile
                    </Button>
                    <Button
                        className={classes.userActions}
                        onClick={handleLogoutAlert}
                        color="inherit"
                    // component={RouterLink}
                    // to="/Profile"
                    >
                        Log Out
                    </Button>
                </Toolbar>
            </AppBar>
            {showLogoutAlert === true ? <Alert severity="warning" className={classes.logoutAlert}>
                Are you sure you want to log out?
            </Alert> : null}
        </>
    )
}
// }

const mapStateToProps = state => ({
    loggedIn: state.users.loggedIn,
    token: state.sessions.token,
})

export default connect(mapStateToProps, { clearCurrentUser, getToken, signupUser })(Header)