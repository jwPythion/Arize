import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from '../../components/UI';
import { Row, Col } from '../../components/Grid'
import { BgImage, MainContainer, IndexBtn } from '../../components/Main';
import Quote from '../../components/Main/Quote';
import AuthService from '../../components/AuthService';
import './Main.css';

class Main extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    quote: true,
    bg: "bg-fade",
    main: "main-scale-up"
  }

  componentDidMount() {
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/welcome');
    }

    if (sessionStorage.getItem('playIntro')) {
      this.setState({
        nav: "",
        quote: false,
        bg: "",
        main: ""
      })
    }

    sessionStorage.setItem('playIntro', { val: 'playIntro' });
  }

  render() {
    return (
      <div>
        {(this.Auth.loggedIn()) ? <Nav /> : ''}
        {(this.state.quote) ? <Quote /> : ''}
        <MainContainer classes={this.state.main}>
          <h1 className="main-title-text text-center pt-5 mt-3">Welcome</h1>
          <h2 className="text-center pb-5">What would you like to do today?</h2>

          <Row classes="justify-content-center mb-5">

            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/groups"}>
                <IndexBtn color="warning" img="groups-icon.png" alt="groups">Groups</IndexBtn>
              </Link>
            </Col>
            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/reminders"}>
                <IndexBtn color="info" img="reminder-icon.png" alt="reminder">Reminders</IndexBtn>
              </Link>
            </Col>
            <Col size="lg-4 sm-6" spacing="pb-3">
              <Link to={"/events"}>
                <IndexBtn color="danger" img="events-icon.png" alt="events">Events</IndexBtn>
              </Link>
            </Col>
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
              <Link to={"/todolist"}>
                <IndexBtn color="danger" img="todolist-icon.png" alt="to do list">To Do List</IndexBtn>
              </Link>
            </Col>

          </Row>
        </MainContainer>
        <BgImage ani={this.state.bg} />
      </div>
    )
  }
}

export default Main;
