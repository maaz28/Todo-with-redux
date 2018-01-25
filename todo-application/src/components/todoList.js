import React from 'react';
import { Button } from 'react-materialize';


class TodoListComponent extends React.Component {
    render() {
        var style = {
            border : '1px solid grey',
            display : 'inline-block',
            width: '1100px',
            height : '30px'
          };
        return (
                <div>
                    {(this.props.flag) ?
                        <ul>
                            {this.props.todos.map((val, ind) => {
                                return <li key={ind}>
                                    <div style = {style}> {val} </div>
                                    <Button onClick = {this.removeHandler.bind(this, ind)} className= 'red darken-4'>Del </Button>
                                    <Button onClick = {this.editHandler.bind(this, ind, val)} className = ''>Edit </Button>
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

