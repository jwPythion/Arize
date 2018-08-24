import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from "./pages/Main";
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';


import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

// Our Components
import Login from './components/Login';
// import Profile from './components/Profile';
import Signup from './components/Signup';
import MyCalendar from './components/Calendar';
import Events from './components/Events/Events';
import Reminder from './components/Reminder/Reminder';
import Wrapper from './components/Wrapper'
import { Footer } from './components/UI/Footer';
import Weather from './components/Weather';

if (localStorage.getItem("id_token")) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Switch>
                <Route exact path="/" component={Main}  />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/calendar" component={MyCalendar} />
                <Route exact path="/reminders" component={Reminder} />
                <Route exact path="/weather" component={Weather} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </Wrapper>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
