import "./index.css";
import NavBarIndex from "../nav_bar";
const LayoutIndex = () => {
  return (
    <div className="layout_page">
      <div className="side_bar">
        <NavBarIndex />
      </div>
      <div className="page_content">Page Content</div>
    </div>
  );
};
export default LayoutIndex;
