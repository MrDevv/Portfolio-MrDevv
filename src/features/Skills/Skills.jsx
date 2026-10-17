import React from "react";
import { SkillsContainer } from "../../components/SkillsContainer";

export const Skills = ({tecnologias}) => {
  
  
  let tecnologiasFormateadas = {}
  
  const tituloTecnologias = [
    ...new Set(tecnologias.map(tecnologia => tecnologia.tipoTecnologia))
  ]

  tituloTecnologias.forEach(titulo => {
    tecnologias.forEach(tecnologia => {
      if (titulo === tecnologia.tipoTecnologia) {
        if (tecnologia.tipoTecnologia === 'bases de datos') {
          tecnologiasFormateadas = {
            ...tecnologiasFormateadas,
              ['backend']: [...tecnologiasFormateadas['backend'] || [], {
                nombre: tecnologia.tecnologia,
                logo_url: tecnologia.logoURL
              }]
          }
        }else{
          tecnologiasFormateadas = {
            ...tecnologiasFormateadas,
              [titulo]: [...tecnologiasFormateadas[titulo] || [], {
                nombre: tecnologia.tecnologia,
                logo_url: tecnologia.logoURL
              }]
          }
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
