import React from "react";

export const Col = ({ size, spacing, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")+ " "+spacing}>
    {children}
  </div>
);
