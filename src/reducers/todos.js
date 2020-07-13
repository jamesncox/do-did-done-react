import {
    SET_TODOS,
    LOADING_TODOS,
    CREATE_TODO,
    LOADING_SINGLE_TODO,
    UPDATE_TODO,
    DELETE_TODO
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
            return { ...state, todos: [...state.todos, action.payload], loadingSingleTodo: false }

        case UPDATE_TODO:
            const updatedTodos = state.todos.map((todo, index) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        text: action.payload.text,
                        priority: action.payload.priority,
                        complete: action.payload.complete
                    }
                }
                return todo
            })
            return { ...state, todos: updatedTodos, loading: false }

        case DELETE_TODO:
            const persistedTodos = state.todos.filter(todo => todo.id !== action.payload.id)
            return { ...state, todos: persistedTodos }
        default:
            return state
    }
}