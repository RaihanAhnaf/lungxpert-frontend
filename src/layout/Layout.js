import React from "react";
import Sidebar from "../component/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="row w-100">
      <div id="sidebar" className="col-md-2">
        <Sidebar />
      </div>
      <div id="main" className="col-md-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
