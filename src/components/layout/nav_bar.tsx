import NavData from "./data_nav_bar";
import "./nav_bar.css";
const NavBar = () => {
  return (
    <>
      <ul>
        {NavData.map((obj, key) => {
          return (
            <>
              <li
                key={key}
                onClick={() => {
                  window.location.pathname = obj.link;
                }}
                className="list_row"
              >
                <div id="list_icon">{obj.icon}</div>
                <div id="list_title">{obj.title}</div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
export default NavBar;
