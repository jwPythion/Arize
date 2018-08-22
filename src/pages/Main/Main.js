import React from "react";
import { BgImage, Container } from '../../components/Main';
import Quote from '../../components/Main/Quote';
import './Main.css';

const Main = () => (
  <div>
    <Quote />
    <Container>
      <h1 className="main-title-text text-center pt-5 mt-3">Welcome</h1>
      <h2 className="text-center pb-5">What would you like to do today?</h2>

      <div className="row justify-content-center mb-5">

        <div className="col-lg-4 col-sm-6 pb-3">
          <a className="btn btn-warning hvr-ripple-out mx-2">
            <img class="main-img-btn img-fluid" src="/assets/img/groups-icon1.png" alt="groups button" />
          </a>
        </div>
        <div className="col-lg-4 col-sm-6 pb-3">
          <a className="btn btn-info hvr-ripple-out mx-2">
            <img class="main-img-btn img-fluid" src="/assets/img/reminder-icon.png" alt="reminder button" />
          </a>
        </div>
        <div className="col-lg-4 col-sm-6 pb-3">
          <a className="btn btn-danger hvr-ripple-out mx-2">
            <img class="main-img-btn img-fluid" src="/assets/img/events-icon.png" alt="events button" />
          </a>
        </div>
        <div className="col-lg-4 col-sm-6 pb-3">
          <a className="btn btn-primary hvr-ripple-out mx-2">
            <img class="main-img-btn img-fluid" src="/assets/img/weather-icon.png" alt="weather button" />
          </a>
        </div>
        <div className="col-lg-4 col-sm-6 pb-3">
          <a className="btn btn-success hvr-ripple-out mx-2">
            <img class="main-img-btn img-fluid" src="/assets/img/calendar-icon.png" alt="calendar button" />
          </a>
        </div>
        <div className="col-lg-4 col-sm-6 pb-3">
          <a className="btn btn-danger hvr-ripple-out mx-2">
            <img class="main-img-btn img-fluid" src="/assets/img/todolist-icon.png" alt="todolist button" />
          </a>
        </div>

      </div>
    </Container>
    <BgImage />
  </div>
);

export default Main;
