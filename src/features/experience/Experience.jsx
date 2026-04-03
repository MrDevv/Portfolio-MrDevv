import { CardExperience } from "../../components/CardExperience";
import { formatearFecha } from "../../helpers/formatearFecha";


export const Experience = ({experiencias}) => {    

    experiencias.forEach(experiencia => {
        experiencia.fecha_inicio = formatearFecha(experiencia.fecha_inicio);
        experiencia.fecha_fin = formatearFecha(experiencia.fecha_fin);
    })

    return (
      <div id="experience" className="section_experience">
        <h3>Experiencia</h3>
        <div className="container_all_experience">
            {
                experiencias.map(experiencia => (
                    <CardExperience key={experiencia.experiencia_id} experiencia={experiencia}/>
                ))
            }

        </div>
      </div>
    )
}