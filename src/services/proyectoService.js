import axiosClient from "../api/axiosClient";

export const getProyectos = async () => {
    return axiosClient.get("/desarrolladores/me/proyectos");
}