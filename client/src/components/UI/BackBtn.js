import React from 'react';
import { Link } from "react-router-dom";
import './BackBtn.css';

export const BackBtn = () => (
    <nav className="navbar navbar-light w-100 px-5">
        <Link to={"/"}>
            <button className="btn btn-success btn-lg hvr-ripple-out back-btn">
                <i className="fas fa-arrow-alt-circle-left"></i>&nbsp;&nbsp;Back
        </button>
        </Link>
    </nav>
);

