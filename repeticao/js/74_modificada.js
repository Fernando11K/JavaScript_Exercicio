!(function () {
    controllerNumeros()
})()
function controllerNumeros() {

    let listNumeros = contarNumeros();
    let listMultiplos = contarMultiplos(listNumeros);

    let template = "<div class='row'>"
    template = "<div class='col-6'>";
    template += "<p>" + listNumeros.join(", ") + "</p>";
    template += "</div>"

    template = "<div class='col-6'>";
    template += "   <p>" + listMultiplos.join(", ") + "</p>";
    template += "</div>"
    template += "</div>"

    saidaResultado(template);

}

function saidaResultado(texto) {
    document.querySelector('#saidaResultado').innerHTML = texto;
}

function contarNumeros() {
    let listNumeros = [];
    for (let index = 1; index <= 100; index++) {
        listNumeros.push(index);

    }
    return listNumeros;
}

function contarMultiplos(listNumeros = []) {
    let listMultiplos = [];
    for (let index = 0; index <= listNumeros.length; index++) {
        if (listNumeros[index] % 10 == 0) {
            listMultiplos.push(listNumeros[index])
        }

    }
    return listMultiplos;

}
