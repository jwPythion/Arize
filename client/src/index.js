import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Main from "./pages/Main";
import User from "./pages/User";
import NotFound from './pages/NotFound';

import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

// Our Components
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Events from './components/Events/Events';
import Wrapper from './components/Wrapper'
import Nav from './components/Nav';
import Footer from './components/Footer';

if(localStorage.getItem("id_token")) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}
ReactDOM.render(
    <Router>
        <Wrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user/:id" component={User} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/events" component={Events} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Wrapper>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
