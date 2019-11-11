// Sidebar navigation to Payments App
import React from "react";

import "bootstrap/dist/css/bootstrap.css";

const Sidebar = props => {
  const { title, children } = props;
  return (
    <div id="sidebar-wrapper" className="bg-light border-right">
      <div className="sidebar-heading">{title} </div>
      <div className="list-group list-group-flush">{children}</div>
    </div>
  );
};

export default Sidebar;
