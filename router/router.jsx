import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout";
import Index from "../src/pages/Index";
import Login from "../src/pages/Login"
import Products from "../src/pages/Products"
import Register from "../src/pages/Register"
import Details from "../src/pages/Details"
import Cart from "../src/components/Cart";
import DIY from "../src/pages/DIY";
import WorkWithUs from "../src/pages/workWithUs";
import Contact from "../src/pages/Contact";
import Favorite from "../src/pages/Favorite";
import AdminPanel from "../src/pages/AdminPanel";
import CategoryPage from "../src/pages/CategoryPage";
import MainCategoryPage from "../src/pages/MainCategoryPage";
import EditItem from "../src/components/forms/EditItem";
import PostPayment from "../src/pages/PostPayment";

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
        {path: "/:id/edit",
    element: <EditItem/>},
        {path: "/cart",
    element:<Cart/>},
        {path:"/diy",
    element: <DIY/>},
        {path:"/workwithus",
    element: <WorkWithUs/>},
        {path: "/contact",
    element:<Contact/>},
        {path: "/favorite",
    element:<Favorite/>},
        {path: "/adminpanel",
    element:<AdminPanel/>},
        {path: "/category/:main/:param",
    element:<CategoryPage/>},
        {path: "/category/:main",
    element:<MainCategoryPage/>},
      {path: "/post-payment",
    element:<PostPayment/>},
    ]  
}
])
export default router