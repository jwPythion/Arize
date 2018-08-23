import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = ({ ani }) => (
    <nav className={`navbar navbar-light w-100 px-5 ${ani}`}>
        <Link to={"/"}>
            <a className="navbar-brand">
                <i className="far fa-image"></i>
            </a>
        </Link>
        <Link to={"/profile"}>
            <a className="navbar-brand">
                <i className="fas fa-cog"></i>
            </a>
        </Link>
    </nav>
);
