import React, { Component } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendarcomponent extends Component {

    isSpecialDay(activeStartDate, date, view) {
        var hasmatch = false;
        this.props.holidays.forEach(function (day, i) {
            var splitdate = day.date.split('-');
            var asdate = new Date(splitdate[2], (splitdate[0] - 1), splitdate[1]);
            hasmatch = (asdate.getDate() === date.getDate() && asdate.getMonth() === date.getMonth()) ? (typeof day.name == "undefined" ? false : day.name) : hasmatch;
        })
        return view === 'month' ? (hasmatch !== false ? '-' + hasmatch[0] + '-' : false) : false;
    }

    hasTodos(activeStartDate, date, view) {
        var hasmatch = false;
        this.props.tododays.forEach(function (o, i) {
            var splitdate = o.date.split('-');
            var asdate = new Date(splitdate[2], (splitdate[0] - 1), splitdate[1]);
            hasmatch = (asdate.getDate() === date.getDate() && asdate.getMonth() === date.getMonth()) ? (typeof o.todos != "undefined" ? true : hasmatch) : hasmatch;
        })
        return view === 'month' ? (hasmatch !== false ? '-T-' : false) : false;
    }

    render() {

        return (
            <div className="calendar">
                <Calendar
                    onClickDay={this.props.action.bind(Calendar, 'showTodolist')}
                    tileContent={({ activeStartDate, date, view }) => (
                        <p>{(this.isSpecialDay(activeStartDate, date, view) || '') + (this.hasTodos(activeStartDate, date, view) || '')}</p>
                    )}
                    tileClassName={({ activeStartDate, date, view }) => (
                        this.isSpecialDay(activeStartDate, date, view) ? (this.hasTodos(activeStartDate, date, view) ? 'purple' : 'blue') : (this.hasTodos(activeStartDate, date, view) ? 'green' : '')
                    )}
                />


            </div>
        )
    }
}
export default Calendarcomponent;
