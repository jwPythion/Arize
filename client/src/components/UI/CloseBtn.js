import React from 'react';
import './CloseBtn.css';

export const CloseBtn = () => (
    <nav className="navbar navbar-light w-100 px-5">
        <button className="btn btn-danger btn-lg hvr-ripple-out close-btn">
            <i className="fas fa-times"></i>
        </button>
    </nav>
);