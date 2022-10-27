!(function () {
    controllerNumeros()
})()
function controllerNumeros() {

    saidaResultado("Resultado: " + geraNumerosImpar());
}

function saidaResultado(texto) {
    document.querySelector('#saidaResultado').innerHTML = texto;
}

function geraNumerosImpar() {
    let numeros = '';
    for (let index = 0; index <= 200; index++) {
        if (index % 2 != 0) {
            numeros += index + ' ';
        }
    }
    return numeros;


}
