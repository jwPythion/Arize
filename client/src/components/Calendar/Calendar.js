import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import myEvents from '../dummyevents';
import { Container, Row, Col } from '../Grid';
import { BackBtn } from '../UI';
import { BgImage } from '../Main';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => {
    return (
        <div className="calendar">
            <Container fluid>
                <BackBtn />
                <div className="card p-4">
                    <h1 className="card-title text-center"><strong>Calendar</strong></h1>
                </div>
                <Row classes="justify-content-center bg-light profile-row">
                    <Col size="sm-12" spacing="text-center py-4">
                        <BigCalendar
                            events={myEvents}
                            step={60}
                            timeslots={8}
                            startAccessor='start'
                            endAccessor='end'
                            style={{ height: "100vh" }}
                            views={["month", "week", "day"]}
                        />
                    </Col>
                </Row>
            </Container>
            <BgImage />
        </div>
    );
};

export default MyCalendar;