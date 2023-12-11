import React, { useState } from "react";
import { projects } from "../../data/constants";
import { CardProject } from "../../components/CardProject";

export const Projects = () => {
  const [optionSelected, setoptionSelected] = useState("all");

  const isActive = (option) =>
    optionSelected === option ? "option_active" : "";

  return (
    <div id="projects" className="section_projects">
      <h3>Projects</h3>
      <div className="container_projects">
        <div className="options">
          <div
            onClick={() => setoptionSelected("all")}
            className={`option ${isActive("all")}`}
          >
            All
          </div>
          <div
            onClick={() => setoptionSelected("web app")}
            className={`option ${isActive("web app")}`}
          >
            WEB APP'S
          </div>
          <div
            onClick={() => setoptionSelected("android app")}
            className={`option ${isActive("android app")}`}
          >
            ANDROID APP'S
          </div>
        </div>        
          <div                       
          className="projects"
          >
            {optionSelected === "all"
              ? projects.map((project) => (
                  <CardProject key={project.id} project={project} />
                ))
              : projects
                  .filter((project) => project.category === optionSelected)
                  .map((project) => (
                    <CardProject key={project.id} project={project} />
                  ))}
          </div>
      </div>
    </div>
  );
};
