import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"; // İkonu buraya ekleyin
import {
  faEnvelope,
  faUser,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ color: "#ffffff" }}
              size="2x"
            />
          </li>
          <li>
            <NavLink to="/" exact="true">
              <FontAwesomeIcon icon={faHouse} className="fifteenPxPadding" />
              Anasayfa
            </NavLink>
          </li>
          <li>
            <NavLink to="explore">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="fifteenPxPadding"
              />
              Keşfet
            </NavLink>
          </li>
          <li>
            <NavLink to="notifications">
              <FontAwesomeIcon icon={faBell} className="fifteenPxPadding" />
              Bildirimler
            </NavLink>
          </li>
          <li>
            <NavLink to="messages">
              <FontAwesomeIcon icon={faEnvelope} className="fifteenPxPadding" />
              Mesajlar
            </NavLink>
          </li>
          <li>
            <NavLink to="communities">
              <FontAwesomeIcon icon={faUsers} className="tenPxPadding" />
              Topluluklar
            </NavLink>
          </li>
          <li>
            <NavLink to="premium">
              {" "}
              <FontAwesomeIcon icon={faXTwitter} className="fifteenPxPadding" />
              Premium
            </NavLink>
          </li>
          <li>
            <NavLink to="profile">
              <FontAwesomeIcon icon={faUser} className="fifteenPxPadding" />
              Profil
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
