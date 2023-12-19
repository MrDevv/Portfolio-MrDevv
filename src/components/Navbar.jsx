import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeToggleMenu, setactiveToggleMenu] = useState(false);

  const isActive = (section) =>
    section === activeSection ? "active" : undefined;

  const handleLinkClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  return (
    <div className="container_navbar">
      <div className="container_logo_links_github container">     
      <div
          className="box-shadow"
          style={activeToggleMenu ? { display: "block" } : { display: "none" }}
          onClick={()=> setactiveToggleMenu(!activeToggleMenu)}
        ></div>   
        <div className="logo">
          <Link to={"/"} onClick={() => setActiveSection(null)}>
            MrDevv
          </Link>
        </div>
        <div className={`links ${activeToggleMenu ? "showLinks" : ""}`}>
          <a
            className={isActive("links")}
            onClick={() => {
              handleLinkClick("links");
              setactiveToggleMenu(!activeToggleMenu);
            }}
            href="#about"
          >
            About
          </a>
          <a
            className={isActive("skills")}
            onClick={() => {
              handleLinkClick("skills");
              setactiveToggleMenu(!activeToggleMenu);
            }}
            href="#skills"
          >
            Skills
          </a>
          <a
            className={isActive("projects")}
            onClick={() => {
              handleLinkClick("projects");
              setactiveToggleMenu(!activeToggleMenu);
            }}
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
        <div
          onClick={() => setactiveToggleMenu(!activeToggleMenu)}
          className="toggle-menu"
        >
          <i
            className="fa-solid fa-bars"
            style={
              activeToggleMenu ? { display: "none" } : { display: "block" }
            }
          ></i>
          <i
            className="fa-solid fa-xmark"
            style={
              activeToggleMenu ? { display: "block" } : { display: "none" }
            }            
          ></i>
        </div>
      </div>      
    </div>
  );
};
