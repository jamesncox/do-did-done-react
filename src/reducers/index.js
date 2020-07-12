import { combineReducers } from 'redux'
import sessions from '../reducers/sessions'
import users from '../reducers/users'
import lists from '../reducers/lists'
import errors from '../reducers/errors'
import todos from '../reducers/todos'

const rootReducer = combineReducers(
    {
        sessions,
        users,
        lists,
        errors,
        todos
    }
)

export default rootReducer