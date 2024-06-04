import React from "react";
import SidebarAdmin from "../component/SidebarAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="row w-100">
      <div id="sidebar" className="col-md-2">
        <SidebarAdmin />
      </div>
      <div id="main" className="col-md-10">
        {children}
      </div>
    </div>
  );
};

export default LayoutAdmin;
