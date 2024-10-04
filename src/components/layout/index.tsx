import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarIndex from "../nav_bar";
import HomeIndex from "../home";
import NoPageIndex from "../no_page";
import UsersIndex from "../users";
import BanksIndex from "../banks";
import DashboardIndex from "../dashboard";

const LayoutIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBarIndex />}>
          <Route index element={<HomeIndex />} />
          <Route path="dashboard" element={<DashboardIndex />} />
          <Route path="users" element={<UsersIndex />} />
          <Route path="banks" element={<BanksIndex />} />
          <Route path="*" element={<NoPageIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default LayoutIndex;
