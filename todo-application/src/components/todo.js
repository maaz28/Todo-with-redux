import React from 'react';

class TodoComponent extends React.Component {

    render() {
        return (
            <div>
                <input type = 'text' placeholder = 'Enter Task Here !' ref = 'task'/>
                
                <button onClick = {this.addTodo.bind(this)}>AddTodo</button>
                <button onClick = {this.removeAll.bind(this)}>RemoveAll</button>

            </div>
        )
    }
    addTodo(){
        console.log(this.refs.task.value);
        this.props.saveTaskInTheStore(this.refs.task.value);
    }

    removeAll(){
        this.props.removeAll();
    }
}
export default TodoComponent;

