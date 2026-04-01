import axiosClient from "../api/axiosClient";

export const getTecnologias = async () => {
    return axiosClient.get("/desarrolladores/me/tecnologias");
}