const DatosFemeninos = [
    { fecha: "04 de febrero", nombrePrueba: "GRAN PREMIO BTT GALLEGOS DE ARGAÑÁN", tipoPrueba: "BTT", ubicacion: "GALLEGOS DE ARGAÑÁN (SALAMANCA)" },
    { fecha: "04 de febrero", nombrePrueba: "II TROFEO SIEGA VERDE BTT ESCUELAS", tipoPrueba: "BTT", ubicacion: "VILLAR DE LA YEGUA (SALAMANCA)" },
    { fecha: "10 de febrero", nombrePrueba: "XVIII TROFEO JOAQUIN MIGUELAÑEZ", tipoPrueba: "BTT", ubicacion: "CANTIMPALOS (SEGOVIA)" },
    { fecha: "17 de febrero", nombrePrueba: "VI BTT STREAMBIKE-CIUDAD DE AVILA", tipoPrueba: "BTT", ubicacion: "AVILA (AVILA)" },
    { fecha: "18 de febrero", nombrePrueba: "II TROFEO CIUDAD DE ARENAS BTT XCO", tipoPrueba: "BTT XCO", ubicacion: "ARENAS DE SAN PEDRO (AVILA)" },
    { fecha: "24 de febrero", nombrePrueba: "V TROFEO FCO MANCEBO BTT", tipoPrueba: "BTT", ubicacion: "BURGOHONDO (AVILA)" },
    { fecha: "25 de febrero", nombrePrueba: "I TROFEO AYTO DE RIOFRIO BTT", tipoPrueba: "BTT", ubicacion: "RIOFRIO (AVILA)" },
    { fecha: "02 de marzo", nombrePrueba: "GRAN PREMIO INTERNACIONAL CANDELEDA-GREDOS", tipoPrueba: "BTT", ubicacion: "CANDELEDA (AVILA)" },
    { fecha: "09 de marzo", nombrePrueba: "XCO VILLA DE GUIJUELO", tipoPrueba: "BTT XCO", ubicacion: "GUIJUELO (SALAMANCA)" },
    { fecha: "10 de marzo", nombrePrueba: "GRAN PREMIO CIUDAD DE VALLADOLID BTT XCO", tipoPrueba: "BTT XCO", ubicacion: "VALLADOLID (VALLADOLID)" },
    { fecha: "10 de marzo", nombrePrueba: "I TROFEO AYTO FONTIVEROS-MEMORIAL ESTELA DOMINGUEZ", tipoPrueba: "BTT", ubicacion: "FONTIVEROS (AVILA)" },
    { fecha: "16 de marzo", nombrePrueba: "IV XCO BTT BEMBIBRE", tipoPrueba: "BTT XCO", ubicacion: "BEMBIBRE (LEON)" },
    { fecha: "19 de agosto", nombrePrueba: "XLIII GRAN PREMIO VILLA DE CERVERA", tipoPrueba: "BTT", ubicacion: "CERVERA DE PISUERGA (PALENCIA)" },
    { fecha: "23 de septiembre", nombrePrueba: "I TROFEO VADILLO – CHALLENGE SORIA", tipoPrueba: "BTT", ubicacion: "VADILLO (SORIA)" },
    { fecha: "23 de septiembre", nombrePrueba: "I TROFEO TALVEILA CRI – CHALLENGE SORIA", tipoPrueba: "BTT", ubicacion: "TALVEILA (SORIA)" },
    { fecha: "24 de septiembre", nombrePrueba: "XI CRITERIUM MOISES DUEÑAS", tipoPrueba: "BTT", ubicacion: "BEJAR (SALAMANCA)" },
    { fecha: "24 de septiembre", nombrePrueba: "I TROFEO NAVALENO – CHALLANGE SORIA", tipoPrueba: "BTT", ubicacion: "NAVALENO (SORIA)" }
];

const cuerpoTabla = document.getElementById("tabla-PruebasFem");

DatosFemeninos.forEach(function(prueba) {
    const fila = document.createElement("tr");
    
    Object.values(prueba).forEach(function(valor) {
        const celda = document.createElement("td");
        celda.textContent = valor;
        fila.appendChild(celda);
    });

    cuerpoTabla.appendChild(fila);
});
