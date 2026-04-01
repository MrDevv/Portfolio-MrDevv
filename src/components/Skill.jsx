import React from "react";

export const Skill = ({ skill }) => {  
  
  const { logo_url, nombre } = skill;
  return (
    <div className="skill">
      <img src={logo_url} alt={nombre} />
      <p>{nombre}</p>
    </div>
  );
};
