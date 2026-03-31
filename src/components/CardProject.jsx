export const CardProject = ({ project }) => {    
    const { titulo, url_imagen_presentacion, etiquetas, descripcion, url_repositorio, url_produccion, inLive } = project;
  return (
    <div className="card_project">
      {/* <img src={image} alt={title} /> */}
      <img src={url_imagen_presentacion} alt={titulo} />
      <div className="technologies">
        {etiquetas.map((etiqueta) => (
          <span key={etiqueta.etiqueta_id} className="technology">{etiqueta.descripcion}</span>
        ))}
      </div>
      <div className="description">
        <div className="title">{titulo}</div>
        <p className="information">{descripcion}</p>
      </div>
      <div className="buttons">
        <a className="view_code" href={url_repositorio} target="_blank">
          Ver repositorio
        </a>
        {inLive && (
          <a className="view_live" href={url_produccion} target="_blank">
            Ver en vivo
          </a>
        )}
      </div>
    </div>
  );
};
