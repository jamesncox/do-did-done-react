import React from 'react'
import { connect } from 'react-redux'

function MyCategories(props) {

    return (
        <>
            Hi
        </>
    )
}

const mapStateToProps = (state) => ({
    user: state.users.user,
    categories: state.categories.categories
})

export default connect(mapStateToProps)(MyCategories)