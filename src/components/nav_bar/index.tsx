import {  Link } from "react-router-dom";
import nav_bar_data from "./nav_bar_data";
import "./index.css";
import { useState } from "react";

const NavBarIndex = () => {
  const [activeTitle, setActiveTitle] = useState("");
  return (
    <div>
      <nav>
      <ul>
      {nav_bar_data.map((obj, key) => {
        return (
          <li>
          <div className="side_bar_row" key={key} onClick={()=>{setActiveTitle(obj.link)}}>
            <div id="icon">{obj.icon}</div>
            <div id="title">{obj.title}</div>
          </div>
        </li>
         
        );
      })}
      </ul>
      </nav>
    </div>
  );
};

export default NavBarIndex;
