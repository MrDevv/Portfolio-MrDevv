import { CardExperience } from "../../components/CardExperience";
import { formatearFecha } from "../../helpers/formatearFecha";


export const Experience = ({experiencias}) => {    

    const experienciasFormateadas = experiencias.map(experiencia => {
        return {
            ...experiencia,
            fechaInicio: formatearFecha(experiencia.fechaInicio),
            fechaFin: experiencia.fechaFin ? formatearFecha(experiencia.fechaFin) : "Actualidad"
        }
        
    })

    return (
      <div id="experience" className="section_experience">
        <h3>Experiencia</h3>
        <div className="container_all_experience">
            {
                experienciasFormateadas.map(experiencia => (
                    <CardExperience key={experiencia.experienciaUUID} experiencia={experiencia}/>
                ))
            }

        </div>
      </div>
    )
}