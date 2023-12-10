import React from "react";
import { Navbar } from "../../components/Navbar";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";

export const Home = () => {
  return (
    <>
      <Navbar />      
      <About/>
      <Skills/>
      <Projects/>
    </>
  );
};
