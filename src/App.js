import React, { Component } from "react";
import Calendar from './Calendarcomponent';
import Todolist from './Todolistcomponent';
import Holidays from './Holidays';
import Todos from './Todos';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "React",
            showHideCalendar: true,
            showHideTodolist: false,
            holidays: Holidays,
            tododays: Todos,
            todolistdate: null,
        };

        this.hideComponent = this.hideComponent.bind(this);
    }

    storeDateListItem() {

        var dates = this.props.tododays;
        var curdate = new Date(this.props.todolistdate);
        var readabledate = (curdate.getMonth() + 1) + '-' + curdate.getDate() + '-' + curdate.getFullYear();
        var hasmatch = dates.filter(date => (date.date === readabledate));
        var todo = 'get this value from input field';

        if (hasmatch.length) {
            hasmatch[0].todos = hasmatch[0].todos || [];
            hasmatch[0].todos.push(todo);
        } else {
            dates.push({
                date: readabledate,
                todos: [todo],
            });
        }
        this.setState({
            tododays: dates,
        });

        console.log(dates);
    }

    hideComponent(name, date) {

        switch (name) {
            case "showTodolist":
                this.setState({
                    todolistdate: date,
                    showHideTodolist: true
                });
                break;
            case "showHideCalendar":
                this.setState({ showHideCalendar: !this.state.showHideCalendar });
                break;
            case "showHideTodolist":
                this.setState({
                    showHideTodolist: !this.state.showHideTodolist
                });
                break;
            default:
            //null;
        }
    }

    render() {
        const { showHideCalendar, showHideTodolist } = this.state;
        return (
            <div>
                {showHideCalendar && <Calendar
                    action={this.hideComponent}
                    hallomandy='eentext'
                    holidays={Holidays}
                    tododays={Todos}
                />}
                {showHideTodolist && <Todolist
                    action={this.storeDateListItem}
                    todolistdate={this.state.todolistdate}
                    tododays={this.state.tododays}
                    holidays={Holidays}
                />}
                <div>
                    <button onClick={() => this.hideComponent("showHideTodolist")}>
                        Click to show/hide Todolist component
          </button>
                </div>
            </div>
        );
    }
}

export default App;