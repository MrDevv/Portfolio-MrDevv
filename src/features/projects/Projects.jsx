import React, { useState } from "react";
import { projects } from "../../data/constants";
import { CardProject } from "../../components/CardProject";
import { useProyectos } from "../../hooks/useProyectos";
import Swal from "sweetalert2";

export const Projects = () => {
  const [optionSelected, setoptionSelected] = useState("all");
  const {proyectos, loading, error} = useProyectos();

  const tipoProyectos = [
  ...new Set(proyectos.map(p => p.tipo_proyecto.descripcion))
  ];  

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: error.message
    });
  }

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
