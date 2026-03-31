import { useEffect, useState } from "react"
import { getProyectos } from "../services/proyectoService";


export const useProyectos = () => {
    const [proyectos, setProyectos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerProyectos = async () => {
            try {
                const response = await getProyectos();                
                setProyectos(response.data.data.content);
            } catch( error ) {
                setError(error.response.data);
            } finally {
                setLoading(false);
            }
        }

        obtenerProyectos();
    }, []);

    return { proyectos, loading, error };
}