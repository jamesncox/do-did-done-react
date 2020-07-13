import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Redirect } from "react-router";
import { getLists } from '../../actions/lists'
import { getTodos } from '../../actions/todos'

import Header from './Header'
import BottomNavBar from './BottomNavBar'
import MyLists from '../List/MyLists'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    header: {
        fontFamily: "'Nanum Pen Script', cursive",
        fontSize: "3rem",
        color: "rgba(27, 27, 27, .8)",
        textAlign: "center",
        [theme.breakpoints.up('md')]: {
            marginTop: "1.5em",
        }
    }
}))


function Profile(props) {
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        if (props.loggedIn) {
            dispatch(getLists(props.user.id))
            dispatch(getTodos(props.user.id))
        }
    }, [dispatch, props.user.id, props.loggedIn])

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
                <MyLists />
                <BottomNavBar />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    loggedIn: state.users.loggedIn,
    loadingLists: state.lists.loadingLists
})

export default connect(mapStateToProps, { getLists, getTodos })(Profile)