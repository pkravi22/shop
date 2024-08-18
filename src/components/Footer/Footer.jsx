import React from "react";
import "./Footer.css";
import footer_logo from "../Assests/logo_big.png";
import instagram_icon from "../Assests/instagram_icon.png";
import pinterest_icon from "../Assests/pintester_icon.png";
import whatsapp_icon from "../Assests/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <h3>SHOPPER</h3>
      </div>
      <div className="links_logo">
        <ul className="footer_links">
          <li>Company</li>
          <li>Offices</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer_social_icon">
          <div className="footer_social_icon">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer_social_icon">
            <img src={pinterest_icon} alt="" />
          </div>
          <div className="footer_social_icon">
            <img src={whatsapp_icon} alt="" />
            
          </div>
        </div>
        <hr />
        <div className="copyright">
            <p>copyright @ 2023-All rights reserved</p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
