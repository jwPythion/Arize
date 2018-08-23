import React from "react";

export const Input = props => (
  <div className="form-group">
    {(props.label) ? <label htmlFor={props.name}>{props.label}</label> : ''}
    <input className="form-control" {...props} />
  </div >
);
