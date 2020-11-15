import React, { Component } from "react";
import './index.css';

class Todolist extends Component {

    render() {
        return (
            <div className="todolist">
                <h1>Todo List</h1>
                <button onClick={this.props.action.bind(this)}>
                    Click to
                </button>
            </div>
        )
    }
}
export default Todolist;
