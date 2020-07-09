import { combineReducers } from 'redux'
import sessions from '../reducers/sessions'
import users from '../reducers/users'
import lists from '../reducers/lists'
import errors from '../reducers/errors'

const rootReducer = combineReducers(
    {
        sessions,
        users,
        lists,
        errors
    }
)

export default rootReducer