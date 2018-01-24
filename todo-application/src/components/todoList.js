import React from 'react';

class TodoListComponent extends React.Component {
    render() {
        return (
                <div>
                    {(this.props.flag) ?
                        <ul>
                            {this.props.todos.map((val, ind) => {
                                return <li key={ind}>
                                    <span > {val} {ind} </span>
                                    <button onClick = {this.removeHandler.bind(this, ind)}>remove </button>
                                    <button onClick = {this.editHandler.bind(this, ind, val)}>Edit </button>
                                </li>
                            })}
                        </ul>
                        :
                        <div>
     <input type="text" ref="todoUpdate" defaultValue = {this.props.defaultValue}/>
                            <button onClick = {this.updateHandler.bind(this)}>Update Todo</button>
                            <button onClick = {this.cancelHandler.bind(this)}>Cancel</button>
                        </div>
                    }
                </div>    
        )
    }

    removeHandler(ind){
        this.props.removeHandler(ind);
    }
    editHandler(ind, val){
        this.props.editHandler(ind,val);
    }

    updateHandler(){
        console.log(this.refs.todoUpdate.value)
        this.props.updateHandler(this.refs.todoUpdate.value);
    }

    cancelHandler(){
        this.props.cancelHandler();
    }
}
export default TodoListComponent;

