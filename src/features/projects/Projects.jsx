import React, { useState } from "react";
import { CardProject } from "../../components/CardProject";

export const Projects = ({proyectos}) => {
  const [optionSelected, setoptionSelected] = useState("all");  

  const tipoProyectos = [
  ...new Set(proyectos.map(p => p.tipo_proyecto.descripcion))
  ];  

  const isActive = (option) =>
    optionSelected === option ? "option_active" : "";

  return (
    <div id="projects" className="section_projects">
      <h3>Proyectos</h3>
      <div className="container_projects">
        <div className="options">
          <div
            onClick={() => setoptionSelected("all")}
            className={`option ${isActive("all")}`}
          >
            Todos
          </div>

          {
            tipoProyectos.map((tipo) => (
              <div
                key={tipo}
                onClick={() => setoptionSelected(tipo)}
                className={`option ${isActive(tipo)}`}
              >
                { tipo }
              </div>
            ))
          }
        </div>
          <div
          className="projects"
          >
            {optionSelected === "all"
              ? proyectos.map((project) => (
                  <CardProject key={project.proyecto_id} project={project} />
                ))
              : proyectos
                  .filter((project) => project.tipo_proyecto.descripcion === optionSelected)
                  .map((project) => (
                    <CardProject key={project.proyecto_id} project={project} />
                  ))}
          </div>
      </div>
    </div>
  );
};
