import React from "react";

// Local Components

const Layout = props => {
  const { children } = props;
  return (
    <div id="wrapperwrapper" className="d-flex">
      {children}
    </div>
  );
};

export default Layout;
