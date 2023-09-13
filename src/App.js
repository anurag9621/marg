
import { Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/Registration" element={<Signup />} />
        
      </Routes>
    </>
  );
}

export default App;
