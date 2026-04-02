import axiosClient from "../api/axiosClient"


export const getExperiencias = async () => {
    return axiosClient.get("/desarrolladores/me/experiencias");
}