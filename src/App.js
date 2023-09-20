
import { Route, Routes } from "react-router-dom";
import "./App.css"
import Login from "./pages/login";
import Signup from "./pages/signup";
import Congartulation from "./pages/congartulation";
import Profile from "./pages/profile";
import Nev from "./pages/profile/components/nev";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Registration" element={<Signup />} />
        <Route exact path="/congartulation" element={<Congartulation />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/nev" element={<Nev />} />
      </Routes>
    </>
  );
}

export default App;
