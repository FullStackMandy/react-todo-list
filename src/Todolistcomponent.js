import React, { Component } from "react";
import './index.css';

class Todolist extends Component {

    render() {
        return (
            <div className="todolist">
                <h1>Todo List</h1>
                <input className='inputfield' type='text' />
                <button onClick={this.props.action.bind(this)}>
                    Click to add tasks
                </button>
            </div>
        )
    }
}
export default Todolist;
