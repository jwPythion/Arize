import moment from 'moment';

export default [
    {
      id: 0,
      title: 'Golf Club',
      start: new Date(new Date(2018, 7, 24).setHours(12)),
      end: new Date(new Date(2018, 7, 24).setHours(16)),
    },
    {
      id: 1,
      title: 'Lunch with Suzie @ 12:00pm',
      start: new Date(2018, 7, 9),
      end: new Date(2018, 7, 10),
    },
  
    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2018, 2, 13, 0, 0, 0),
      end: new Date(2018, 2, 20, 0, 0, 0),
    },
  
    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2018, 10, 6, 0, 0, 0),
      end: new Date(2018, 10, 13, 0, 0, 0),
    },
  
    {
      id: 4,
      title: 'Craft Night',
      start: new Date(2018, 7, 9, 0, 0, 0),
      end: new Date(2018, 7, 10, 0, 0, 0),
    },
    {
      id: 5,
      title: 'Jakes Birthday Party',
      start: new Date(2018, 8, 11),
      end: new Date(2018, 8, 13),
      desc: 'Big conference for important people',
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2018, 3, 12, 10, 30, 0, 0),
      end: new Date(2018, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2018, 3, 12, 12, 0, 0, 0),
      end: new Date(2018, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2018, 3, 12, 14, 0, 0, 0),
      end: new Date(2018, 3, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2018, 3, 12, 17, 0, 0, 0),
      end: new Date(2018, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2018, 3, 12, 20, 0, 0, 0),
      end: new Date(2018, 3, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2018, 3, 13, 7, 0, 0),
      end: new Date(2018, 3, 13, 10, 30, 0),
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2018, 3, 17, 19, 30, 0),
      end: new Date(2018, 3, 18, 2, 0, 0),
    },
    {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2018, 3, 17, 19, 30, 0),
      end: new Date(2018, 3, 17, 23, 30, 0),
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2018, 3, 20, 19, 30, 0),
      end: new Date(2018, 3, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: 'Doctor Appointment',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
  ]