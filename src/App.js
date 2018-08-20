import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import User from './pages/User';
import NotFound from './pages/NotFound';
import Wrapper from './components/Wrapper'
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Wrapper>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Wrapper>
  </Router>
);

export default App;
