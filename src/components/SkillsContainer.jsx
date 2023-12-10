import React from "react";
import { Skill } from "./Skill";

export const SkillsContainer = ({ title, skills }) => {
  return (
    <div className="container_skill">
      <h4>{title}</h4>
      <div className="list_skills">
        {skills.map((skill) => (
          <Skill skill={skill}/>
        ))}
      </div>
    </div>
  );
};
