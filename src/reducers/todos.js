import {
    SET_TODOS,
    LOADING_TODOS,
    CREATE_TODO,
    LOADING_SINGLE_TODO
} from '../actionTypes'

export default (state = {
    todos: [],
    loadingTodos: false,
    loadingSingleTodo: false
}, action) => {
    switch (action.type) {
        case LOADING_TODOS:
            return { ...state, todos: [...state.todos], loadingTodos: true }

        case SET_TODOS:
            return { ...state, todos: action.payload, loadingTodos: false }

        case LOADING_SINGLE_TODO:
            return { ...state, todos: [...state.todos], loadingSingleTodo: true }

        case CREATE_TODO:
            return { ...state, lists: [...state.todos, action.payload], loadingSingleTodo: false }

        default:
            return state
    }
}