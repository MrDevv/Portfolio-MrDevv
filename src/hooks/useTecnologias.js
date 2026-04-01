import { useEffect, useState } from "react";
import { getTecnologias } from "../services/tecnologiaService";


export const useTecnologias = () => {

    const [tecnologias, setTecnologias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerTecnologias = async () => {
            try{
                const response = await getTecnologias();
                setTecnologias(response.data.data);
            } catch( error ) {
                setError(error.response.data);
            } finally {
                setLoading(false);
            }
        }

        obtenerTecnologias();
    }, [])

    return { tecnologias, loading, error };

}