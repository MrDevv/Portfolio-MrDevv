import { useEffect, useState } from "react";
import { getDatosDesarrollador } from "../services/desarrolladorService";


export const useDesarrollador = () => {
    const [desarrollador, setDesarrollador] = useState({});
    const [loadingDesarrollador, setLoading] = useState(true);
    const [errorDesarrollador, setError] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await getDatosDesarrollador();
                setDesarrollador(data.data.data);
            } catch (error) {
                setError(error.response.data);
            } finally {
                setLoading(false);
            }
        }

        obtenerDatos();
    }, [])

    return { desarrollador, loadingDesarrollador, errorDesarrollador } 
}