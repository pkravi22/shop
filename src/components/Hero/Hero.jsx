import React from "react";
import "./Hero.css";
import hero_image from "../Assests/hero_image.png";
import hand_icon from "../Assests/hand_icon.png";
import arrow_icon from "../Assests/arrow.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h1>New Arrivals Only</h1>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="Hand icon" />
            </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
       

        <div className="hero-latest-btn">
          <div>latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero_right">
       
        <div>
          <img src={hero_image} alt="Hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
