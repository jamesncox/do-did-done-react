import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getLists } from '../../actions/lists'
import { getTodos } from '../../actions/todos'

import Header from './Header'
import BottomNavBar from './BottomNavBar'
import MyLists from '../List/MyLists'
import Page from './Page'
import BlueLines from './BlueLines'

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
            marginBottom: "-.75rem",
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

    return (
        <div>
            <Header />
            {/* <Page /> */}
            {/* <BlueLines /> */}
            <Typography className={classes.header}>
                Welcome, {props.user.username}
            </Typography>
            <MyLists />
            <BottomNavBar />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    loggedIn: state.users.loggedIn,
    loadingLists: state.lists.loadingLists,
})

export default connect(mapStateToProps, { getLists, getTodos })(Profile)