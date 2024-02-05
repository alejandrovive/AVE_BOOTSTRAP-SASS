const datosPruebasMasculinos = [
    { fecha: "7 de abril", nombrePrueba: "Marcha las hoces", tipoPrueba: "Carretera", ubicacion: "Vegacervera (León)" },
    { fecha: "20 de abril", nombrePrueba: "Ebro Gold Race", tipoPrueba: "Carretera", ubicacion: "Miranda de Ebro (Burgos)" },
    { fecha: "27 de abril", nombrePrueba: "Marcha Bajo tietar -Gredos sur", tipoPrueba: "BTT", ubicacion: "Mombeltrán (Ávila)" },
    { fecha: "25 de mayo", nombrePrueba: "La Icuesta", tipoPrueba: "Carretera", ubicacion: "Espinosa de los Monteros" },
    { fecha: "26 de mayo", nombrePrueba: "Marcha El Terrible", tipoPrueba: "Carretera", ubicacion: "Toro (Zamora)" },
    { fecha: "23 de junio", nombrePrueba: "Memorial Alberto Fernández", tipoPrueba: "Carretera", ubicacion: "Aguilar de Campoo (Palencia)" },
    { fecha: "06 de julio", nombrePrueba: "Espinosa paraíso ciclista", tipoPrueba: "Carretera", ubicacion: "Espinosa de los Monteros (Burgos)" },
    { fecha: "14 de julio", nombrePrueba: "Ciclo ruta Lagunas de Neila", tipoPrueba: "Carretera", ubicacion: "Quintanar de la Sierra" },
    { fecha: "11 de agosto", nombrePrueba: "Marcha Pedro Delgado", tipoPrueba: "Carretera", ubicacion: "Segovia" },
    { fecha: "22 de septiembre", nombrePrueba: "II Vuelta a Segovia Gravel", tipoPrueba: "Gravel", ubicacion: "Segovia" }
];


const cuerpoTabla = document.getElementById("tabla-PruebasMasc");

datosPruebasMasculinos.forEach(function(prueba) {
    const fila = document.createElement("tr");
    
    Object.values(prueba).forEach(function(valor) {
        const celda = document.createElement("td");
        celda.textContent = valor;
        fila.appendChild(celda);
    });

    cuerpoTabla.appendChild(fila);
});


