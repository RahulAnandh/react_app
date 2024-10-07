import "./index.css";
import { Outlet, Link } from "react-router-dom";
import nav_bar_data from "./nav_bar_data";
import "./index.css";

const LayoutIndex = () => {
  return (
    <div className="layout_page">
      <div className="side_bar">
      <div>
      <nav>
      <ul>
      {nav_bar_data.map((obj, key) => {
        return (
          <li>
          <div className="side_bar_row" key={key} >
            <div id="icon">{obj.icon}</div>
            <div id="title">{obj.title}</div>
          </div>
        </li>
        );
      })}
      </ul>
      </nav>
    </div>      </div>
      <div className="page_content"><Outlet/></div>
    </div>
  );
};
export default LayoutIndex;
