import React from "react";
import { SkillsContainer } from "../../components/SkillsContainer";
import { skills } from "../../data/constants";

export const Skills = () => {
  return (
    <div id="skills" className="section_skills">
      <h3>Skills</h3>
      <div className="container_all_skills">
        {skills.map(({ title, skills }) => (
          <SkillsContainer title={title} skills={skills}/>
        ))}
      </div>
    </div>
  );
};
