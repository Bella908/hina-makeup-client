import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Product/Products";
import LogIn from "../Users/LogIn";
import Register from "../Users/Register";
import ProtectedRoute from "../Privet Route/ProtectedRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/items',
        element: <ProtectedRoute>
          
          <Products></Products>
          </ProtectedRoute>
      },
      {

        path: '/login',
        element: <LogIn></LogIn>,

      },
      {

        path: '/register',
        element: <Register></Register>,

      },
    ]
  },
]);

export default router;