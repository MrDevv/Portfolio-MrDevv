import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const isActive = (section) => section === activeSection && "active" ;

  const handleLinkClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <div className="container_navbar">
      <div className="container_logo_links_github container">
        <div className="logo">
          <Link to={"/"} onClick={()=> setActiveSection(null)}>MrDevv</Link>
        </div>
        <div className="links">
          <a
            className={isActive("links")}
            onClick={() => handleLinkClick('links')}
            href="#about"
          >
            About
          </a>
          <a
            className={isActive("skills")}
            onClick={() => handleLinkClick('skills')}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={isActive("projects")}
            onClick={() => handleLinkClick('projects')}
            href="#projects"
          >
            Projects
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/MrDevv" target="_blank">
            Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};
