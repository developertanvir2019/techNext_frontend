import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error/Error";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
