import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from '../../components/Grid'
import { BgImage, MainContainer, IndexBtn } from '../../components/Main';
import Nav from '../../components/UI';
import Quote from '../../components/Main/Quote';
import '../Main/Main.css';

class Dummy extends Component {
    constructor() {
        super();
        sessionStorage.clear();
    }

    state = {
        quote: true,
        bg: "bg-fade",
        main: "main-scale-up"
    }

    render() {
        return (
            <div>
                <Nav />
                <Quote />
                <MainContainer classes="main-scale-up">
                    <h1 className="main-title-text text-center pt-5 mt-3">Welcome</h1>
                    <h2 className="text-center pb-5">What would you like to do today?</h2>

                    <Row classes="justify-content-center mb-5">

                        <Col size="lg-4 sm-6" spacing="pb-3">
                            <Link to={"/weather"}>
                                <IndexBtn color="primary" img="weather-icon.png" alt="weather">Weather</IndexBtn>
                            </Link>
                        </Col>
                        <Col size="lg-4 sm-6" spacing="pb-3">
                            <Link to={"/calendar"}>
                                <IndexBtn color="success" img="calendar-icon.png" alt="calendar">Calendar</IndexBtn>
                            </Link>
                        </Col>
                        <Col size="lg-4 sm-6" spacing="pb-3">
                            <Link to={"/events"}>
                                <IndexBtn color="info" img="events-icon.png" alt="events">Events</IndexBtn>
                            </Link>
                        </Col>

                        <Col size="lg-4 sm-6" spacing="pb-3">
                            <Link to={"/groups"}>
                                <IndexBtn color="warning" img="groups-icon.png" alt="groups">Groups</IndexBtn>
                            </Link>
                        </Col>
                        {/* <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/reminders"}>
                <IndexBtn color="info" img="reminder-icon.png" alt="reminder">Reminders</IndexBtn>
              </Link>
            </Col> */}

                        <Col size="lg-4 sm-6" spacing="pb-3">
                            <Link to={"/todolist"}>
                                <IndexBtn color="danger" img="todolist-icon.png" alt="to do list">To Do List</IndexBtn>
                            </Link>
                        </Col>

                    </Row>
                </MainContainer>
                <BgImage ani="bg-fade" />
            </div>
        )
    }
}

export default Dummy;
