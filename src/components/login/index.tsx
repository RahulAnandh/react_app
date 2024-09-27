import { useState } from "react";
import "./index.css";
const LoginIndex = () => {
  const [login_data, setLoginData] = useState({ user_name: "", password: "" });

  const login = () => {
    console.log(login_data);
  };
  return (
    <div className="login_form_card">
      <img></img>
      <div className="label_and_input">
        <label>User Name</label>
      </div>
      <div className="label_and_input">
        <input
          name="user_name"
          onChange={(e) => {
            setLoginData({ ...login_data, user_name: e.target.value });
          }}
        ></input>
      </div>
      <div className="label_and_input">
        <label>
          <b>Password</b>
        </label>
      </div>
      <div className="label_and_input">
        <input
          name="password"
          type="password"
          onChange={(e) => {
            setLoginData({ ...login_data, password: e.target.value });
          }}
        ></input>
        <div className="label_and_input">
          <label>
            <button
              onClick={() => {
                login();
              }}
            >
              Login
            </button>
          </label>
        </div>
      </div>
    </div>
  );
};
export default LoginIndex;
