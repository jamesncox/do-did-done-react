import {
    SET_CATEGORIES,
    LOADING_CATEGORIES,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY
} from '../actionTypes'

const setCategories = categories => {
    return { type: SET_CATEGORIES, payload: categories }
}

export const getCategories = (id) => {
    return async dispatch => {

        dispatch({ type: LOADING_CATEGORIES })

        try {
            const res = await fetch(`http://localhost:3000/api/v1/user_categories/${id}`)
            if (!res.ok) {
                throw res
            }
            const categoryData = await res.json()
            dispatch(setCategories(categoryData))

        } catch (err) {
            console.log(err)
        }
    }
}