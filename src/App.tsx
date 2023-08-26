import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
