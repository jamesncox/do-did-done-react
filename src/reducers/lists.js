import {
    SET_LISTS,
    LOADING_LISTS,
    CREATE_LIST,
    DELETE_LIST,
    LOADING_SINGLE_LIST,
    SELECTED_LIST,
    SELECTED_LIST_CATEGORY,
    CLEAR_LOADING_SINGLE_LIST
} from '../actionTypes'

export default (state = {
    lists: [],
    loadingLists: false,
    loadingSingleList: false,
    selectedList: {},
    selectedListCategory: {}
}, action) => {
    switch (action.type) {
        case LOADING_LISTS:
            return { ...state, lists: [...state.lists], loadingLists: true }

        case SET_LISTS:
            return { ...state, lists: action.payload, loadingLists: false }

        case LOADING_SINGLE_LIST:
            return { ...state, lists: [...state.lists], loadingSingleList: true }

        case CREATE_LIST:
            return { ...state, lists: [...state.lists, action.payload], loadingSingleList: false }

        case DELETE_LIST:
            const persistedLists = state.lists.filter(list => list.id !== action.payload.id)
            return { ...state, lists: persistedLists }

        case SELECTED_LIST:
            const listObj = state.lists.filter(list => list.id === parseInt(action.payload))[0]
            return { ...state, selectedList: listObj }

        case SELECTED_LIST_CATEGORY:
            return { ...state, selectedListCategory: action.payload }

        case CLEAR_LOADING_SINGLE_LIST:
            return { ...state, loadingSingleList: false }

        default:
            return state
    }
}