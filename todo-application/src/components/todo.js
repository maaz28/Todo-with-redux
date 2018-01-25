import React from 'react';
import { Button } from 'react-materialize';

class TodoComponent extends React.Component {

    render() {
        return (
            <div>
                <input type = 'text' placeholder = 'Enter Task Here !' ref = 'task'/>
                
                <Button onClick = {this.addTodo.bind(this)}  className="btn waves-effect waves-light" type="submit" name="action">Add</Button>
                <Button onClick = {this.removeAll.bind(this)} className = 'red darken-4'>RemoveAll</Button>

            </div>
        )
    }
    addTodo(){
        this.props.saveTaskInTheStore(this.refs.task.value);
        this.refs.task.value = '';
    }

    removeAll(){
        this.props.removeAll();
    }
}
export default TodoComponent;

