import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
);

export default router;
