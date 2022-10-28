let media = 0;
let cont = 0;

!(function () {
})()

function controllerIdadeMediaIndividuos() {

    retornoResultado("Média: " + media);

}


function retornoResultado(resultado) {
    document.querySelector("#saidaResultado").innerHTML = resultado;

}

function calcularMediaIdades(idade) {
    cont++;
    media += (media + idade) / cont;
    mostrarCont()

}

function mostrarCont() {
    document.querySelector("#contador").innerHTML = "<b>" + cont + "</b>"
}

