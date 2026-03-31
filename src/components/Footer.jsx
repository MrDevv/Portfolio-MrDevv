import React from "react";

export const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <span>Mr Devv</span>
      <div className="navbar_footer">
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#experience">Experiencia</a>
        <a href="#projects">Proyectos</a>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/mvegape_/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/miguelangelvegaperez/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/MrDevv" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <span>© {currentYear} Mr Devv. All rights reserved.</span>
    </div>
  );
};
