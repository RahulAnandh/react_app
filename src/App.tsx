import LoginIndex from "./components/login";
import LayoutIndex from "./components/layout";

function App() {
  const isLogin = true;
  return <>{isLogin ? <LayoutIndex /> : <LoginIndex />}</>;
}
export default App;
