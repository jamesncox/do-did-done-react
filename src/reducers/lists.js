import {
    SET_LISTS,
    LOADING_LISTS,
    CREATE_LIST,
    UPDATE_LIST,
    DELETE_LIST,
    LOADING_SINGLE_LIST
} from '../actionTypes'

export default (state = {
    lists: [],
    loadingLists: false,
    errors: null,
    listId: null,
    loadingSingleList: false
}, action) => {
    switch (action.type) {
        case LOADING_LISTS:
            return { ...state, lists: [...state.lists], loadingLists: true }

        case LOADING_SINGLE_LIST:
            return { ...state, lists: [...state.lists], loadingSingleList: true }

        case SET_LISTS:
            return { ...state, lists: action.payload, loadingLists: false }

        case CREATE_LIST:
            console.log(action.payload)
            return { ...state, lists: [...state.lists, action.payload], loadingSingleList: false }

        default:
            return state
    }
}