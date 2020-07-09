import React from 'react'
import { connect } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}))

function MyCategories(props) {

    const renderCategoryLists = (id) => {
        const userCategories = props.categories.filter(category => category.user_id === id)
    }

    const hasCategories = props.categories.filter(category => category.user_id === props.user.id)
    if (hasCategories.length === 0) {
        return <h1> No Lists Yet </h1>
    } else {
        return renderCategoryLists(props.user.id)
    }
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    categories: state.categories.categories
})

export default connect(mapStateToProps)(MyCategories)