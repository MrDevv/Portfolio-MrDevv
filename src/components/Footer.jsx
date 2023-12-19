import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <span>Mr Devv</span>
      <div className="navbar_footer">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/mvegape_/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/miguelangelvegaperez/" target="_blank">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/MrDevv" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
      <span>© 2024 Mr Devv. All rights reserved.</span>
    </div>
  );
};
