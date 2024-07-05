//import Navbar from "./navbar";
import { Link , Outlet } from "react-router-dom";
import CartProviderWrapper from "../components/cartProviderWrapper";




export default function Root() {
  return (
    <div>
      <h1 className="header">Welcome to Pizza Palace!</h1>
      <Navbar />
      <CartProviderWrapper>
        <Outlet />
      </CartProviderWrapper>
      
    </div>
  );
}

function Navbar() {
    return (
      <nav>

            <Link to="/menu">Menu</Link>

            <Link to="/about">About</Link>

            <Link to="/cart">Cart</Link>

            <Link to="/login">Login</Link>
      </nav>
    );
  }