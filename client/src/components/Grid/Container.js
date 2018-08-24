import React from "react";
import './Container.css';

export const Container = ({ fluid, classes, children }) => (
  <div className={`container${fluid ? "-fluid" : ""} ${classes}`}>
    {children}
  </div>
);
