import React from "react";

export const About = () => {
  return (
    <div id="about" className="container_about">
      <div className="container_presentation_profile container">
        <div className="presentation">
          <h2>Hi, I am <br /> Miguel Perez</h2>
          <p>
            I am a <span>Full Stack Developer</span>
          </p>        
          <p>
            I'm currently studying systems engineering and I'm passionate about
            the development of web and mobile applications.
          </p>
          <a href="#">CV</a>
        </div>
        <div className="profile_image">
          <img src="./src/assets/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};
