import React from "react";
import profilePic from "../assets/profile.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <img src={profilePic} alt="Medjoubi Mohamed Ramy" className="hero-img" />
        <div>
          <h1>Hi, I'm Medjoubi Mohamed Ramy</h1>
          <p>A Web Developer & BI Specialist with a Master's in Computer Science</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
