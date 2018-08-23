import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import myEvents from '../dummyevents';
import "./Calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => {
 return( <div>
    <BigCalendar
      events={myEvents}
      step={60}
      timeslots={8}
      startAccessor='start'
      endAccessor='end'
      style={{ height: "100vh" }}
      views={["month", "week", "day"]}
    />
  </div>
 );
};

export default MyCalendar;