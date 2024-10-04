import { Outlet, Link } from "react-router-dom";
import nav_bar_data from "./nav_bar_data";
import "./index.css";
import { useState } from "react";

const NavBarIndex = () => {
  const [activeTitle, setActiveTitle] = useState("");
  return (
    <div className="side_bar">
      <nav>
        <ul className="nav_bar_list">
          {nav_bar_data.map((obj, key) => {
            return (
              <Link
                to={obj.link}
                key={key}
                onClick={() => {
                  setActiveTitle(obj.link);
                }}
              >
                <li
                  className="nav_bar_row"
                  id={activeTitle == obj.link ? "active" : ""}
                >
                  <div id="nav_bar_icon"> {obj.icon}</div>
                  <div id="nav_bar_title"> {obj.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBarIndex;
