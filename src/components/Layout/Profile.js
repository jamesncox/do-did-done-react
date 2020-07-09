import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Redirect } from "react-router";
import { getCategories } from '../../actions/categories'

import Header from './Header'
import BottomNavigation from './BottomNavigation'
// import Page from './Page'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    header: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "3rem",
        // position: "fixed",
        // top: theme.spacing(2),
        color: "#448aff",
        textAlign: "Center",
        [theme.breakpoints.up('md')]: {
            marginTop: "1.5em",
        }
    }
}))


function Profile(props) {
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        dispatch(getCategories(props.user.id))
        // dispatch(getItems(props.user.id))
    }, [dispatch, props.user.id])

    if (props.loggedIn === false) {
        return (
            <Redirect to="/" />
        )
    } else {
        return (
            <div>
                <Header />
                <Typography className={classes.header}>
                    Welcome, {props.user.username}
                </Typography>

                <BottomNavigation />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    loggedIn: state.users.loggedIn
})

export default connect(mapStateToProps, { getCategories })(Profile)