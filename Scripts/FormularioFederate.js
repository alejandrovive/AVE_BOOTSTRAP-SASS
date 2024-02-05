function mostrarContenido() {
    const federadoRadio = document.getElementById('federado');
    const clubFederacion = document.getElementById('clubFederacion');
    const categoria = document.getElementById('categoria');

    if (federadoRadio.checked) {
        clubFederacion.style.display = 'block';
        categoria.style.display = 'block';
    } else {
        clubFederacion.style.display = 'none';
        categoria.style.display = 'none';
    }
}
