const INITIAL_STATE = {
    todos: ['Hey Beother'],
    NoEditing : true,
    editValue : '',
    editIndex : 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TODO":
        let localTodos = [];
        localTodos.push(action.value)
            return ({ ...state, todos : state.todos.concat(localTodos)})

        case "REMOVE_TODO":
        return ({ ...state, todos : state.todos.slice(0, action.value).concat(state.todos.slice(action.value + 1)) })

        case "REMOVE_ALL":
        return ({ ...state, todos : [] })

        case "EDIT_HANDLER":
        return ({ ...state, NoEditing : action.value.flag, editValue : action.value.editValue, editIndex : action.value.editIndex })

        case "UPDATE_HANDLER":
        let localeTodos = [];
        localeTodos = state.todos;
        localeTodos[state.editIndex] = action.value;
        return ({ ...state, todos : localeTodos, NoEditing : true })

        case "CANCEL":
        return ({ ...state, NoEditing: action.value })

        default:
            return state
    }
}