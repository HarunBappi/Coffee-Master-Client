import { createBrowserRouter } from "react-router-dom";
import Home from './../Components/Home/Home';
import HomeLayout from './../HomeLayout/HomeLayout';

const Router = createBrowserRouter([
  {
   path:'/',
   element:<HomeLayout></HomeLayout>,
   children:[
    {
      path:'/',
      element:<Home></Home>
    }]
  },
]);
export default Router;
