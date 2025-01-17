import React,{useState} from "react";
import "./Navbar.css"
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png"
import { Link } from "react-router-dom";
function Navbar() {

const [menu,setMenu]=useState("shop");
  return (
    <div className="navbar">
      <div className="nav_logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="navbar_menu" type="none">
        <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}}to="/">Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to="/mens">Men</Link>  {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">Women</Link>  {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="login_out">
      <button> <Link style={{textDecoration:'none'}} to="/login">Login</Link></button>
        <Link to="/cart"><img src={cart_icon} alt="cart_icon" /></Link> 
      <div className="nav_cart_count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
