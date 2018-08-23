import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from '../../components/UI';
import { Row, Col } from '../../components/Grid'
import { BgImage, Container, IndexBtn } from '../../components/Main';
import Quote from '../../components/Main/Quote';
import './Main.css';

class Main extends Component {

  state = {
    classes: ""
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ classes: "d-none" });
      }
        .bind(this),
      15000
    );
  }

  render() {
    return (
      <div>
        <Nav ani="nav-fade" />
        <Quote />
        <Container>
          <h1 className="main-title-text text-center pt-5 mt-3">Welcome</h1>
          <h2 className="text-center pb-5">What would you like to do today?</h2>

          <Row classes="justify-content-center mb-5">

            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/groups"}>
                <IndexBtn color="warning" img="groups-icon.png" alt="groups" />
              </Link>
            </Col>
            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/reminders"}>
                <IndexBtn color="info" img="reminder-icon.png" alt="reminder" />
              </Link>
            </Col>
            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/events"}>
                <IndexBtn color="danger" img="events-icon.png" alt="events" />
              </Link>
            </Col>
            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/weather"}>
                <IndexBtn color="primary" img="weather-icon.png" alt="weather" />
              </Link>
            </Col>
            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/calendar"}>
                <IndexBtn color="success" img="calendar-icon.png" alt="calendar" />
              </Link>
            </Col>
            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/todolist"}>
                <IndexBtn color="danger" img="todolist-icon.png" alt="to do list" />
              </Link>
            </Col>

          </Row>
        </Container>
        <BgImage ani="bg-fade" />
      </div>
    )
  }
}

export default Main;
