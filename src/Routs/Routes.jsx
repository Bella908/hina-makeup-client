import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Product/Products";
import LogIn from "../Users/LogIn";
import Register from "../Users/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/items',
          element:<Products></Products>
        },{
        
          path:'/login',
          element:<LogIn></LogIn>,
      
      },
      {
        
          path:'/register',
          element:<Register></Register>,
      
      },
      ]
    },
  ]);

  export default router;