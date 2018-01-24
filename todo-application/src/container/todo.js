import React from 'react';
import TodoComponent from '../components/todo'
import { connect } from 'react-redux';
import {addTodo, removeAll} from '../store/actions/action'
import TodoList from './todoList'

class Todo extends React.Component {
    render(){
        return(
            <div>
            <TodoComponent saveTaskInTheStore = {this.saveTaskInTheStore.bind(this)} removeAll = {this.RemoveAll.bind(this)}/>
            <TodoList />
            </div>
        )
    }

    RemoveAll(){
        this.props.removeAll();
    }

    saveTaskInTheStore(task){
        console.log(task);
        this.props.addTodo(task);
    }
}
 
function mapStateToProp(state){
    return({
        todos: state.root.todos
    })
}
function mapDispatchToProp(dispatch){
    return({
        addTodo: (task)=>{dispatch(addTodo(task))},
        removeAll: ()=>{dispatch(removeAll())}
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Todo);