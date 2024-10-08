import "./index.css";
import { Outlet, Link } from "react-router-dom";
import nav_bar_data from "./nav_bar_data";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardIndex from "../dashboard";
import HomeIndex from "../home";
import NoPageIndex from "../no_page";
import UsersIndex from "../users";

const LayoutIndex = () => {
  return (
    <BrowserRouter>
    <div className="layout_page">
      <div>
      <Routes>
        <Route path="/" element={<></>}>
          <Route index element={<HomeIndex />} />
          <Route path="home" element={<HomeIndex />} />
          <Route path="dashboard" element={<DashboardIndex />} />
          <Route path="users" element={<UsersIndex />} />
          <Route path="*" element={<NoPageIndex />} />
        </Route>
      </Routes>
    </div>
      <div className="side_bar">
      <div>
      <nav>
      <ul>
      {nav_bar_data.map((obj, key) => {
        return (
          <li>
          <Link to={obj.link}>  
          <div className="side_bar_row" key={key} >
            <div id="icon">{obj.icon}</div>
            <div id="title">{obj.title}</div>
          </div>
          </Link>
        </li>
        );
      })}
      </ul>
      </nav>
    </div>     
     </div>
     <div><Outlet/></div>
    </div>
    </BrowserRouter>
  );
};
export default LayoutIndex;
