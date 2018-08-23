import React from "react";
import './Container.css';

export const Container = props => (
    <div id="main-container">

        <div className={`row justify-content-center align-items-center h-100 ${props.classes}`}>
            <div className="col-md-9" id="index-content">
                {props.children}
            </div>
        </div>

    </div>
);
