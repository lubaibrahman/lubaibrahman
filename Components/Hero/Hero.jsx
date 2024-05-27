import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Unleashing education's might for a world of relentless brilliance!
        </h1>
        <p>
          This phrase embodies a powerful call to action, emphasizing the
          transformative potential of education. It suggests breaking barriers
          and unleashing the full force of knowledge to create a world marked by
          unwavering excellence and brilliance. It conveys a sense of urgency
          and determination, urging individuals to harness the power of
          education to drive positive change on a global scale.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
