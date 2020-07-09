import {
    SET_LISTS,
    LOADING_LISTS,
    CREATE_LIST,
    UPDATE_LIST,
    DELETE_LIST,
    LOADING_SINGLE_LIST,
    SET_ERRORS
} from '../actionTypes'

const setLists = lists => {
    return { type: SET_LISTS, payload: lists }
}

export const getLists = (id) => {
    return async dispatch => {

        dispatch({ type: LOADING_LISTS })

        try {
            const res = await fetch(`http://localhost:3000/api/v1/user_lists/${id}`)
            if (!res.ok) {
                throw res
            }
            const listData = await res.json()
            dispatch(setLists(listData))

        } catch (err) {
            console.log(err)
        }
    }
}

export const createList = (list) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_SINGLE_LIST })

        const formData = {
            category: list.category,
            color: list.color,
            user_id: list.userId
        }

        const res = await fetch("http://localhost:3000/api/v1/lists", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })

        const listObj = await res.json()

        if (listObj.errors) {
            dispatch({ type: SET_ERRORS, payload: listObj.error })
        } else {
            dispatch({ type: CREATE_LIST, payload: listObj })
        }
    }
}