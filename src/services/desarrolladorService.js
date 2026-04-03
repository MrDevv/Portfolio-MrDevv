import axiosClient from "../api/axiosClient"

export const getDatosDesarrollador = async () => {
    return axiosClient.get("/desarrolladores/me/datos")
}