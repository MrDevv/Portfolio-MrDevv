import React from "react";

export const CardProject = ({ project }) => {  
  console.log(project);
    const { title, image, technologies, description, url_code, url_live, inLive } = project;
  return (
    <div className="card_project">
      {/* <img src={image} alt={title} /> */}
      <img src="/assets/pokedexweb.jpg" alt={title} />
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
        <a className="view_code" href={url_code} target="_blank">
          View Code
        </a>
        {inLive && (
          <a className="view_live" href={url_live} target="_blank">
            View Live App
          </a>
        )}
      </div>
    </div>
  );
};
