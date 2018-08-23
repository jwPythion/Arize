import React from "react";

export const Row = ({ fluid, classes, children }) => (
  <div className={`row${fluid ? "-fluid" : ""} ${classes}`}>
    {children}
  </div>
);
