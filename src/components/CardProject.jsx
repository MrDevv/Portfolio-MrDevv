import React from "react";

export const CardProject = ({ project }) => {  
    const { title, image, technologies, description, inLive } = project;
  return (
    <div className="card_project">
      <img src={image} alt={title} />
      <div className="technologies">
        {technologies.map((technology) => (
          <span key={technology} className="technology">{technology}</span>
        ))}
      </div>
      <div className="description">
        <div className="title">{title}</div>
        <p className="information">{description}</p>
      </div>
      <div className="buttons">
        <a className="view_code" href="#">
          View Code
        </a>
        {inLive && (
          <a className="view_live" href="#">
            View Live App
          </a>
        )}
      </div>
    </div>
  );
};
