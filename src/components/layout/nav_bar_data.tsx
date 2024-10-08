import HomeIcon from "@mui/icons-material/Home";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
const nav_bar_data = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Dashboard",
    icon: <SpeedIcon />,
    link: "/dashboard",
  },

  {
    title: "Users",
    icon: <GroupAddIcon />,
    link: "/users",
  },
  {
    title: "Banks",
    icon: <AccountBalanceIcon />,
    link: "/banks",
  },
];
export default nav_bar_data;
