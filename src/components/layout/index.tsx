import "./index.css";
import NavBarIndex from "../nav_bar";
import { Outlet } from "react-router-dom";

const LayoutIndex = () => {
  return (
    <div className="layout_page">
      <div className="side_bar">
        <NavBarIndex />
      </div>
      <div className="page_content"><Outlet/></div>
    </div>
  );
};
export default LayoutIndex;
