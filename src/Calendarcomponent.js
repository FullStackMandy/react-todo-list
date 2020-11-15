import React, { Component } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Calendarcomponent extends Component {

    isHoliday(activeStartDate, date, view) {
        var hasmatch = false;
        this.props.holidays.forEach(function (o, i) {
            var splitdate = o.date.split('-');
            var asdate = new Date(splitdate[2], (splitdate[0] - 1), splitdate[1]);
            hasmatch = (asdate.getDate() === date.getDate() && asdate.getMonth() === date.getMonth()) ? o.name : hasmatch;
        })
        return view === 'month' ? (hasmatch !== false ? <p>{hasmatch[0]}</p> : false) : false;
    }

    render() {
        console.log(this.props.hallomandy);

        return (
            <div className="calendar">
                <Calendar
                    onClickDay={this.props.action.bind(this, 'showTodolist')}
                    tileContent={({ activeStartDate, date, view }) => (
                        this.isHoliday(activeStartDate, date, view)
                    )}
                    tileClassName={({ activeStartDate, date, view }) => (
                        this.isHoliday(activeStartDate, date, view) ? 'green' : null
                    )}
                />


            </div>
        )
    }
}
export default Calendarcomponent;
