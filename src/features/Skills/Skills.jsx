import React from "react";
import { SkillsContainer } from "../../components/SkillsContainer";

export const Skills = ({tecnologias}) => {
  
  let tecnologiasFormateadas = {}
  
  const tituloTecnologias = [
    ...new Set(tecnologias.map(tecnologia => tecnologia.tipo_tecnologia))
  ]

  tituloTecnologias.forEach(titulo => {
    tecnologias.forEach(tecnologia => {
      if (titulo === tecnologia.tipo_tecnologia) {
        tecnologiasFormateadas = {
          ...tecnologiasFormateadas,
            [titulo]: [...tecnologiasFormateadas[titulo] || [], {
              nombre: tecnologia.descripcion,
              logo_url: tecnologia.logo_url
            }]
        }
      }
    })
  })
  
  return (
    <div id="skills" className="section_skills">
      <h3>Habilidades</h3>
      <div className="container_all_skills">
        {
          Object.entries(tecnologiasFormateadas).map(([titulo, tecnologias]) => (                        
            <SkillsContainer key={titulo} title={titulo} skills={tecnologias}/>
          ))
        }
      </div>
    </div>
  );
};
