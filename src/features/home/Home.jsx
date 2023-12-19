import React from "react";
import { Navbar } from "../../components/Navbar";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
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
