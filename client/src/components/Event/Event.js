import React from 'react';
import BigCalendar from 'react-big-calendar';

let Event = {
    event: MyEvent, // used by each view (Month, Day, Week)
    toolbar: MyToolbar,
    agenda: {
         event: MyAgendaEvent // with the agenda view use a different component to render events
    }
  }
  <Calendar, component={Event} />
  
  export default Event;