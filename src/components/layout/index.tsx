import "./index.css";
import NavBar from "./nav_bar";
import LayoutContent from "./layout_content";
const LayoutIndex = () => {
  return (
    <div className="layout_view">
      <div className="nav_bar">
        <NavBar />
      </div>
      <div className="content">
        <LayoutContent />
      </div>
    </div>
  );
};

export default LayoutIndex;
