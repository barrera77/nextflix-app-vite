import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/Login", element: <Login /> },
]);

export default router;
