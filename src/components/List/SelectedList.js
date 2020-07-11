import React from 'react'
import { connect } from 'react-redux'

function SelectedList(props) {

    const list = lists.filter(list => list.id === selectedListId)

}

const mapStateToProps = state => ({
    lists: state.lists.lists,
    selectedListId: state.lists.selectedListId
})

export default connect(mapStateToProps)(SelectedList)