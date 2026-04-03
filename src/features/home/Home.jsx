import React from "react";
import { Navbar } from "../../components/Navbar";

import { Projects } from "../projects/Projects";
import { Footer } from "../../components/Footer";
import { About } from "../About/About";
import { Experience } from "../experience/Experience";
import { Skills } from "../Skills/Skills";
import { useDesarrollador } from "../../hooks/useDesarrollador";
import { useTecnologias } from "../../hooks/useTecnologias";
import { useExperiencias } from "../../hooks/useExperiencias";
import { useProyectos } from "../../hooks/useProyectos";
import Swal from "sweetalert2";


export const Home = () => {

  const { desarrollador, loadingDesarrollador, errorDesarrollador } = useDesarrollador();
  const {tecnologias, loadingSkills, errorSkills } =  useTecnologias();
  const { experiencias, loadingExperience, errorExperience } = useExperiencias();    
  const {proyectos, loadingProjects, errorProjects} = useProyectos();
  


  console.log({ errorDesarrollador, errorSkills, errorExperience, errorProjects });
  

  if (errorSkills || errorDesarrollador || errorExperience || errorProjects) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Hubo un error al cargar los datos, por favor intenta nuevamente"
    });
  }

  return (
    <>
    {
      (loadingDesarrollador || loadingSkills || loadingExperience || loadingProjects)  && <div className="loader_container"> <span className="loader"></span> </div>      
    }
      <Navbar />      
      <About desarrollador={desarrollador}/>
      <Skills tecnologias={tecnologias}/>
      <Experience experiencias={experiencias}/>
      <Projects proyectos={proyectos}/>
      <Footer/>
    </>
  );
};
