import { Outlet, Link } from "react-router-dom";
import nav_bar_data from "./nav_bar_data";
import "./index.css";
import { useState } from "react";

const NavBarIndex = () => {
  const [activeTitle, setActiveTitle] = useState("");
  return (
    <div>
      {nav_bar_data.map((obj, key) => {
        return (
          <div className="side_bar_row" key={key}>
            <div id="icon">{obj.icon}</div>
            <div id="title">{obj.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default NavBarIndex;
