import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Anasayfa
            </NavLink>
          </li>
          <li>
            <NavLink to="explore" activeClassName="active">
              Keşfet
            </NavLink>
          </li>
          <li>
            <NavLink to="notifications" activeClassName="active">
              Bildirimler
            </NavLink>
          </li>
          <li>
            <NavLink to="messages" activeClassName="active">
              Mesajlar
            </NavLink>
          </li>
          <li>
            <NavLink to="communities" activeClassName="active">
              Topluluklar
            </NavLink>
          </li>
          <li>
            <NavLink to="premium" activeClassName="active">
              Premium
            </NavLink>
          </li>
          <li>
            <NavLink to="profile" activeClassName="active">
              Profil
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
