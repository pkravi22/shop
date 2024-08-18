import React from "react";
import exclusive_image from "../Assests/exclusive_image.png";
import "./Offer.css";
const Offer = () => {
  return (
    <div className="offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1> Offer for you!</h1>
        <p>only on best sellers product</p>
        <button>Check Now</button>
      </div>
      <div className="offers_right">
        <img src={exclusive_image} alt="exclusive Image" />
      </div>
    </div>
  );
};

export default Offer;
