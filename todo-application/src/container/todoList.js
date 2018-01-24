import React from 'react';
import { connect } from 'react-redux';
import TodoListComponent from '../components/todoList'
import { removeTodo, editHandler, updateHandler, cancelHandler } from '../store/actions/action';
class TodoList extends React.Component {
    render() {
        return (
            <TodoListComponent 
            todos = {this.props.todos} 
            removeHandler = {this.removeHandler.bind(this)} 
            flag = {this.props.flag}
            editHandler = {this.editHandler.bind(this)}
            defaultValue = {this.props.defaultValue}
            updateHandler = {this.UpdateHandler.bind(this)}
            cancelHandler = {this.cancelHandler.bind(this)}
            />
        )
    }
    

    cancelHandler(){
        this.props.cancelHandler();

    }
    
editHandler(ind, val){
    console.log(ind,val)
    this.props.editHandler(ind,val);
    }

removeHandler(ind){
    this.props.removeTodo(ind);
}

UpdateHandler(val){

    this.props.updateHandler(val);
}

}


function mapStateToProp(state){
    console.log(state.root)
    return({
        todos: state.root.todos,
        flag : state.root.NoEditing,
        defaultValue : state.root.editValue
    })
}

function mapDispatchToProp(dispatch){
    return({
        removeTodo: (ind)=>{dispatch(removeTodo(ind))},
        editHandler : (ind, val) => {dispatch(editHandler(ind, val))},
        updateHandler : (val) => {dispatch(updateHandler(val))},
        cancelHandler : () => {dispatch(cancelHandler())}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(TodoList);

