import React from "react";

export const Skill = ({ skill }) => {
  const { image, name } = skill;
  return (
    <div className="skill">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};
