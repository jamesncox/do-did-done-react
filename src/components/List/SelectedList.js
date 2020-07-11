import React from 'react'
import { connect } from 'react-redux'

import Header from '../Layout/Header'
import BottomNavBar from '../Layout/BottomNavBar'

function SelectedList(props) {

    const list = props.lists.filter(list => list.category === props.selectedList)
    console.log(list)

    return (
        <>
            <Header />
            <BottomNavBar />
        </>
    )

}

const mapStateToProps = state => ({
    lists: state.lists.lists,
    selectedList: state.lists.selectedList
})

export default connect(mapStateToProps)(SelectedList)