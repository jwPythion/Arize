import React from "react";
import './Nav.css';

const Nav = () => (
  <nav className="nav nav-pills justify-content-between fixed-top">
    <a className="nav-item nav-link active">Active</a>
    <a className="nav-item nav-link active">Disabled</a>
  </nav>
);

export default Nav;
