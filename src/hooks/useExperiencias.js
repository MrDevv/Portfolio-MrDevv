import { useEffect, useState } from "react"

import { getExperiencias } from "../services/experienciaService";


export const useExperiencias = () => {

    const [experiencias, setExperiencias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerExperiencias = async () => {
            try {
                const experiencias = await getExperiencias();
                setExperiencias(experiencias.data.data.content);
            } catch (error) {
                setError(error.response.data);
            } finally { 
                setLoading(false);
            }
        }

        obtenerExperiencias();
    }, [])

    return { experiencias, loading, error };

}