export function addTodo(task) {
    return ({ type: "TODO", value: task })
}

export function removeTodo(ind) {
    return ({ type: "REMOVE_TODO", value: ind })
}

export function removeAll(){
    console.log('inRemoveAll')
    return ({ type: "REMOVE_ALL" })
}

export function editHandler(ind, val){
    console.log('In Edit Handler')
    return ({ type: "EDIT_HANDLER", value : {flag : false, editValue : val, editIndex : ind} })
}

export function updateHandler(val){
    console.log(val);
    return ({ type: "UPDATE_HANDLER", value : val })
}

export function cancelHandler(){
    return ({ type: "CANCEL", value : true })
}