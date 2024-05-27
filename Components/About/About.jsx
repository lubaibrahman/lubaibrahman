import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>About UNIVERSITY</h3>
        <h2>Building Tomorrow's Conquerors Asserting Leadership Today</h2>
        <p>
          Join our program, 'Building Tomorrow's Leaders.' It's all about
          shaping bold leaders for the future through hands-on training,
          mentorship, and real-world experience. Gain confidence, strategic
          thinking, and decisive skills to excel in any field. Step away from
          traditional leadership and become an unstoppable force for tomorrow.
        </p>
        <p>
          Our programs prioritize innovation, hands-on learning, and
          personalized mentorship to ready educators for significant roles in
          classrooms, schools, and communities. Through tailored guidance and
          immersive experiences, we nurture the skills and mindset required for
          success in today's ever-evolving educational landscape.
        </p>
        <p>
          Whether you aim to teach, lead, counsel, or take on educational
          leadership, our programs offer the perfect path to achieve your goals
          and unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
