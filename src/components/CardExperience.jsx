

export const CardExperience = ({ experiencia }) => {

    return (
        <div className="experience">
            <div className="header_experience">
            <h2>{experiencia.nombre_empresa}</h2>
            <h3>{experiencia.puesto}</h3>
            <span>Proyecto: {experiencia.titulo}</span>
            <span>{experiencia.fecha_inicio} - {experiencia.fecha_fin}</span>
            </div>
            <div className="body_experience">
            { experiencia.descripcion }
            </div>
        </div>
    )

}