import React from "react";
import { Navbar } from "../../components/Navbar";
import { Skills } from "../skills/Skills";
import { Projects } from "../projects/Projects";
import { Footer } from "../../components/Footer";
import { About } from "../About/About";
import { Experience } from "../experience/Experience";

export const Home = () => {
  return (
    <>
      <Navbar />      
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  );
};
