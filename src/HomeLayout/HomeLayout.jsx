import { Outlet } from "react-router-dom";
import Footer from './../Components/Footer/Footer';
import Navbar from './../Components/Navbar/Navbar';


export default function HomeLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
