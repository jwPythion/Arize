import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginBottom: 10 }} className="btn btn-info btn-lg btn-block">
    {props.children}
  </button>
);
