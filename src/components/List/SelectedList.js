import React from 'react'
import { connect } from 'react-redux'

import Header from '../Layout/Header'
import BottomNavBar from '../Layout/BottomNavBar'

function SelectedList(props) {

    const list = props.lists.filter(list => list.id === props.selectedListId)

    return (
        <>
            <Header />
            <BottomNavBar />
        </>
    )

}

const mapStateToProps = state => ({
    lists: state.lists.lists,
    selectedListId: state.lists.selectedListId
})

export default connect(mapStateToProps)(SelectedList)