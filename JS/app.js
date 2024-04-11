function agregarBorde() {
    let puntero = document.getElementById('tabla1')
    puntero.setAttribute('border', '5')
}

function eliminarBorde() {
    let puntero = document.getElementById('tabla1')
    puntero.removeAttribute('border', '5')
}
