import React from 'react'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    category: {
        width: "75%",
        height: "3rem",
        fontSize: "2rem",
        margin: "auto",
        textAlign: "center",
        color: "white",
        fontFamily: "'Nanum Pen Script', cursive",
        margin: theme.spacing(2)
    }

}))

function MyLists(props) {
    const classes = useStyles();

    const renderLists = (id) => {
        const userLists = props.lists.filter(list => list.user_id === id)
        return (
            userLists.map(list => {
                return (
                    <Paper key={list.id} className={classes.category} style={{ backgroundColor: `${list.color}` }}>
                        {list.category}
                    </Paper>
                )
            })
        )
    }

    const hasLists = props.lists.filter(list => list.user_id === props.user.id)
    if (hasLists.length === 0) {
        return <h1> No Lists Yet </h1>
    } else {
        return renderLists(props.user.id)
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    lists: state.lists.lists
})

export default connect(mapStateToProps)(MyLists)