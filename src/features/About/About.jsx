import React from "react";
import Typewriter from "typewriter-effect";
// import logo from "../../../public/images/logo.png";

export const About = () => {
  return (
    <div id="about" className="container_about">
      <div className="container_presentation_profile container">
        <div className="presentation">
          <h2>
            Hi, I am <br /> Miguel Perez
          </h2>
          <p>
            I am a{" "}
            <span>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "Android Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <p>
            I'm currently studying systems engineering and I'm passionate about
            the development of web and mobile applications.
          </p>
          <a href="#">CV</a>
        </div>
        <div className="profile_image">
          <img src="assets/logo.jpg" alt="logo" />
        </div>
      </div>
    </div>
  );
};
