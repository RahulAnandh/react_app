import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginIndex from "./components/login";
import LayoutIndex from "./components/layout";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return <>{isLogin ? <LayoutIndex /> : <LoginIndex />}</>;
}
export default App;
