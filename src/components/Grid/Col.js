import React from "react";
import './Col.css';

export const Col = props => (
  <div className={props.size.split(" ").map(size => "col-" + size).join(" ") + " " + props.spacing + " col-bg"}>
    {props.children}
  </div>
);
