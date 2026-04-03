import React from "react";
import Typewriter from "typewriter-effect";

export const About = ({desarrollador}) => {  

  const puesto = desarrollador.puesto || "";
  const nombres = desarrollador.nombres && desarrollador.nombres.split(" ")[0];
  const apellidos = desarrollador.apellidos && desarrollador.apellidos.split(" ")[0];
  

  return (
    <div id="about" className="container_about">
      <div className="container_presentation_profile container">
        <div className="presentation">
          <h2>
            Hola, soy <br /> { nombres } { apellidos }
          </h2>
          <div>
            <p>Soy{" "}</p>
            <span>
                  <Typewriter
                    options={{
                      strings: [puesto],
                      autoStart: true,
                      loop: true,
                    }}
                  />
            </span>
          </div>          
          <p>
          { desarrollador.biografia }
          </p>
          <a href={ desarrollador.cv_url } target="_blank">CV</a>
        </div>
        <div className="profile_image">
          <img src={ desarrollador.logo_url } alt="logo" />
        </div>
      </div>
    </div>
  );
};
