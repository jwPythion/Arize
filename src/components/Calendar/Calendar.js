import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from './events';
import dates from './dates';

import "./Calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
  <div>
    <BigCalendar
      events={events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: "100vh" }}
      views={["month", "week", "day"]}
    />
  </div>
);

export default MyCalendar;