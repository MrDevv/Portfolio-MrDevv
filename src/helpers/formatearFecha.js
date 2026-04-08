export function formatearFecha(fecha) {    
    const date = new Date(fecha + "T00:00:00");

    let resultado = date.toLocaleDateString("es-PE", {
        month: "long",
        year: "numeric"
    });

    return resultado.charAt(0).toUpperCase() + resultado.slice(1);
}