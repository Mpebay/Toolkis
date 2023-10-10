import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout";
import Index from "../src/pages/Index";
import Login from "../src/pages/Login"
import Products from "../src/pages/Products"
import Register from "../src/pages/Register"
import Details from "../src/pages/Details"
import Cart from "../src/components/Cart";


const router = createBrowserRouter([
    {path: "/",
    element:  <MainLayout/>,
    children:[
        {path: "/",
    element:<Index/>},
        {path: "/login",
    element:<Login/>},
        {path: "/products",
    element:<Products/>},
        {path: "/register",
    element:<Register/>},
        {path: "/:id/details",
    element:<Details/>},
        {path: "/cart",
    element:<Cart/>},
    ]  
}
])
export default router