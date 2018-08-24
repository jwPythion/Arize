import React from "react";

export const FormBtn = props => (
  <button {...props} className={`btn btn-info ${(props.noblock) ? '' : 'btn-lg btn-block'}`}>
    {props.children}
  </button>
);
