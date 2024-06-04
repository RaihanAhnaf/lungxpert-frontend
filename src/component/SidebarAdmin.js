import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";

const SidebarAdmin = () => {
  const location = useLocation();
  const [path, setPath] = React.useState("");

  React.useEffect(() => {
    setPath(location);
  }, []);
  return (
    <div className="px-4 bg-sbar position-fixed min-vh-100 d-flex justify-content-between flex-column">
      <div>
        <img src="/assets/img/logo-dashboard.png" alt="Logo" className="mt-4" />
        <hr />
        <ul className="nav nav-pills flex-column text-start">
          <li className="nav-items fs-5 my-1">
            <SidebarMenu
              imgUrl="/assets/img/ic_data.png"
              path="/admin-dashboard"
              title="Dashboard"
            />
          </li>
        </ul>
      </div>
      <div>
        <ul className="nav nav-pills flex-column text-start">
          <li className="nav-items fs-5 my-1">
            <Link to="/login" className="nav-link text-white">
              <img src="/assets/img/ic_logout.png" />
              <span className="ms-2 d-none d-sm-inline">Log Out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarAdmin;
