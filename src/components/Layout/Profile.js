import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import BottomNavigation from './BottomNavigation'
import Page from './Page'

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
        [theme.breakpoints.up('sm')]: {
            display: "none",
        }
    }
}))


function Profile(props) {
    const classes = useStyles();
    if (props.loggedIn === false) {
        return (
            <>
                <Header />
                <Page />
                <BottomNavigation />
            </>
        )
    } else {
        return (
            <div>
                <Header />
                <Typography className={classes.header}>
                    Welcome, {props.user.username}
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
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

export default connect(mapStateToProps)(Profile)