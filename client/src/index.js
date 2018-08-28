import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from "./pages/Main";
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import Edit from './pages/Profile/Edit';
import NotFound from './pages/NotFound';

import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

// Our Components
import Login from './components/Login';
import Signup from './components/Signup';
import MyCalendar from './components/Calendar';
import Events from './components/Events/Events';
import Wrapper from './components/Wrapper'

import Weather from './components/Weather';
import TodoList from './components/TodoList';

import Groups from './components/Groups/Groups';
import Footer from './components/UI/Footer';
import Dummy from './pages/Dummy/Dummy';

if (localStorage.getItem("id_token")) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Switch>
                <Route exact path="/" component={Main}  />
                <Route exact path="/dummy" component={Dummy}  />
                <Route exact path="/welcome" component={Welcome}  />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/edit" component={Edit} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/weather" component={Weather} />
                <Route exact path="/calendar" component={MyCalendar} />
                <Route exact path="/todolist" component={TodoList} />
                <Route exact path="/groups" component={Groups} />
                <Route component={NotFound} />
            </Switch>
            <Footer/>
        </Wrapper>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
