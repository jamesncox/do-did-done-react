import { combineReducers } from 'redux'
import sessions from '../reducers/sessions'
import users from '../reducers/users'
import categoires from '../reducers/categories'

const rootReducer = combineReducers(
    {
        sessions,
        users,
        categories
    }
)

export default rootReducer