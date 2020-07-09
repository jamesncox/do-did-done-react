import { combineReducers } from 'redux'
import sessions from '../reducers/sessions'
import users from '../reducers/users'
import categories from '../reducers/categories'
import errors from '../reducers/errors'

const rootReducer = combineReducers(
    {
        sessions,
        users,
        categories,
        errors
    }
)

export default rootReducer