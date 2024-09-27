import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginIndex from "./components/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginIndex />
    </>
  );
}

export default App;
