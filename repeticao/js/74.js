!(function () {
    controllerNumeros()
})()
function controllerNumeros() {

    saidaResultado("Resultado: " + contarMultiplos());
}

function saidaResultado(texto) {
    document.querySelector('#saidaResultado').innerHTML = texto;
}

function contarMultiplos() {
    let result = "";
    for (let index = 0; index <= 100; index++) {
        result += index + ''
        if (index % 10 == 0) {
            result += " Múltiplo de 10 ";
        }
        result += '<br>'

    }
    return result;
}
