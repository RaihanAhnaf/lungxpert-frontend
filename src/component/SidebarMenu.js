import React from "react";
import { NavLink } from "react-router-dom";

const SidebarMenu = ({ title, path, imgUrl }) => {
  return (
    <NavLink
      to={path}
      className={`${({ isActive }) =>
        isActive ? "active" : ""} nav-link text-white`}
    >
      <img src={imgUrl} />
      <span className="ms-2 d-none d-sm-inline">{title}</span>
    </NavLink>
  );
};

export default SidebarMenu;
