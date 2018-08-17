import React from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Main from "./pages/Main";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
