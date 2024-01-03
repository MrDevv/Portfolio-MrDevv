import React from "react";
import Typewriter from "typewriter-effect";
// import logo from "../../../public/images/logo.png";

export const About = () => {
  return (
    <div id="about" className="container_about">
      <div className="container_presentation_profile container">
        <div className="presentation">
          <h2>
            Hola, soy <br /> Miguel Perez
          </h2>
          <p>
            Soy{" "}
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
          Me apasiona el desarrollo de aplicaciones web y aplicaciones móviles.
          </p>
          <a href="https://drive.google.com/file/d/1-1s5MPVQpjtbbQNMJTI_osueNE2o4OL8/view?usp=drivesdk" target="_blank">CV</a>
        </div>
        <div className="profile_image">
          <img src="assets/logo.jpg" alt="logo" />
        </div>
      </div>
    </div>
  );
};
