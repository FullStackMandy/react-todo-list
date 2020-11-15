import React, { Component } from "react";
import Calendar from './Calendarcomponent';
import Todolist from './Todolistcomponent';
import Holidays from './Holidays';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "React",
            showHideCalendar: true,
            showHideTodolist: false,
            calendardata: Holidays,
        };

        this.hideComponent = this.hideComponent.bind(this);
    }



    storeDate() {

    }

    hideComponent(name) {
        console.log(name);
        switch (name) {
            case "showTodolist":
                this.setState({ showHideTodolist: true });
                break;
            case "showHideCalendar":
                this.setState({ showHideCalendar: !this.state.showHideCalendar });
                break;
            case "showHideTodolist":
                this.setState({ showHideTodolist: !this.state.showHideTodolist });
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
                />}
                {showHideTodolist && <Todolist action={this.storeDate} />}
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