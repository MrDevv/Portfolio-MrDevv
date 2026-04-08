import { CardExperience } from "../../components/CardExperience";
import { formatearFecha } from "../../helpers/formatearFecha";


export const Experience = ({experiencias}) => {    

    const experienciasFormateadas = experiencias.map(experiencia => {
        return {
            ...experiencia,
            fecha_inicio: formatearFecha(experiencia.fecha_inicio),
            fecha_fin: experiencia.fecha_fin ? formatearFecha(experiencia.fecha_fin) : "Actualidad"
        }
        
    })

    return (
      <div id="experience" className="section_experience">
        <h3>Experiencia</h3>
        <div className="container_all_experience">
            {
                experienciasFormateadas.map(experiencia => (
                    <CardExperience key={experiencia.experiencia_id} experiencia={experiencia}/>
                ))
            }

        </div>
      </div>
    )
}