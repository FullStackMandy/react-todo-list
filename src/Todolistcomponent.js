import React, { Component } from "react";
import './index.css';

class Todolist extends Component {

    hasTodos(r) {
        var todostoday = [];
        this.props.tododays.forEach(function (o, i) {
            todostoday = o.date === r ? o.todos : todostoday;
        })
        return todostoday;
    }

    isHoliday(r) {
        var holiday = '';
        this.props.holidays.forEach(function (o, i) {
            holiday = o.date === r ? o.name : holiday;
        })
        return holiday;
    }

    render() {
        var d = new Date(this.props.todolistdate);
        var r = (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getFullYear();
        return (
            <div className="todolist">
                <h1>Todo List {r} <small>{this.isHoliday(r)}</small></h1>
                {this.hasTodos(r).map((item) =>
                    <p>{item}</p>
                )}
                <input className='inputfield' type='text' id="todo" />
                <button onClick={this.props.action.bind(this, this.storeDateListItem)}>
                    Click to add tasks
                </button>
            </div>
        )
    }
}
export default Todolist;
