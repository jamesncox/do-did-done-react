import {
    SET_CATEGORIES,
    LOADING_CATEGORIES,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    LOADING_SINGLE_CATEGORY
} from '../actionTypes'

export default (state = {
    categories: [],
    loadingCategories: false,
    errors: null,
    categoryId: null,
    loadingSingleCategory: false
}, action) => {
    switch (action.type) {
        case LOADING_CATEGORIES:
            return { ...state, categories: [...state.categories], loadingCategories: true }

        case LOADING_SINGLE_CATEGORY:
            return { ...state, categories: [...state.categories], loadingSingleCategory: true }

        case SET_CATEGORIES:
            return { ...state, categories: action.payload, loadingCategories: false }

        case CREATE_CATEGORY:
            console.log(action.payload)
            return { ...state, categories: [...state.categories, action.payload], loadingSingleCategory: false }

        default:
            return state
    }
}