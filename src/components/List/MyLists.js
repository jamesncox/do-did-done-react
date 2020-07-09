import React from 'react'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}))

function MyLists(props) {

    const renderLists = (id) => {
        const userLists = props.lists.filter(list => list.user_id === id)
        userLists.map(list => {
            return (
                <Paper>
                    {list.category}
                </Paper>
            )
        })
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