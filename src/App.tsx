import { useState } from "react";
import LoginIndex from "./components/login";
import LayoutIndex from "./components/layout";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return <>{isLogin ? <LayoutIndex /> : <LoginIndex />}</>;
}
export default App;
