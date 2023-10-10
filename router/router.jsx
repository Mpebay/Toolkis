import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/layouts/MainLayout";
import Index from "../src/pages/Index";


const router = createBrowserRouter([
    {path: "/",
    element:  <MainLayout/>,
    children:[
        {path: "/",
    element:<Index/>}
    ]  
}
])
export default router