import React from "react";
import { Navbar } from "../../components/Navbar";
import { About } from "../about/About";
import { Skills } from "../skills/Skills";
import { Projects } from "../projects/Projects";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />      
      <About/>
      <Skills/>
      <Projects/>      
      <Footer/>
    </>
  );
};
