
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Login from "./pages/login";
import Signup from "./pages/signup";
import Congartulation from "./pages/congartulation";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Registration" element={<Signup />} />
        <Route exact path="/congartulation" element={<Congartulation />} />
      </Routes>
    </>
  );
}

export default App;
