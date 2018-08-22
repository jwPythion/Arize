import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from "./pages/Main";
import User from "./pages/User";

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Events from './components/Events/Events';
import Weather from './components/Weather';

if(localStorage.getItem("id_token")) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}
ReactDOM.render(
    <Router>
        <div>
          
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/" component={Main} />
           
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
