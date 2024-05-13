import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Accessories from "./pages/Accessories.jsx";
import CoffeeMugs from "./pages/CoffeeMugs.jsx";
import Tshirts from "./pages/Clothing.jsx";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/products/:id",
        element: <h1>detail</h1>,
      },
      {
        path: "/t-shirts",
        element: <Tshirts />,
      },
      {
        path: "/coffeemugs",
        element: <CoffeeMugs />,
      },
      {
        path: "/accessories",
        element: <Accessories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
