import React from "react";

export const Input = props => (
  <div className={`form-group ${props.formWidth}`}>
    {(props.label) ? <label htmlFor={props.name}>{props.label}</label> : ''}
    <input className="form-control w-100" {...props} />
  </div >
);
