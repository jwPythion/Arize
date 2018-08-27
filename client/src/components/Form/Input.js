import React from "react";

export const Input = props => (
  <div className={`form-group ${(props.fullwidth) ? (props.fullwidth):''} ${(props.classes) ? (props.classes):''}`}>
    {(props.label) ? <label htmlFor={props.name}>{props.label}</label> : ''}
    <input className="form-control m-2 w-100"  {...props} />
  </div >
);
