import {
    SET_CATEGORIES,
    LOADING_CATEGORIES,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY,
    LOADING_SINGLE_CATEGORY,
    SET_ERRORS
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

export const createCategory = (category) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_SINGLE_CATEGORY })

        const formData = {
            name: category.name,
            color: store.color,
            user_id: category.userId
        }

        const res = await fetch("http://localhost:3000/api/v1/categories", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })

        const categoryObj = await res.json()

        if (categoryObj.errors) {
            dispatch({ type: SET_ERRORS, payload: categoryObj.error })
        } else {
            dispatch({ type: CREATE_STORE, payload: categoryObj })
        }
    }
}