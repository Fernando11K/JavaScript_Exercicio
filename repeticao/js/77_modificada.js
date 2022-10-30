let idades = []
!(function () {

    capturaDadosIdade();

})();

function capturaDadosIdade() {
    document.querySelector("#idade")
        .addEventListener("keypress", event => {
            if (event.key == "Enter") {
                if (event.target.value == "0") {
                    controllerIdadeMediaIndividuos();
                } else {
                    addIdade(event.target.value);
                    mostrarCont(idades.length)
                }
                event.target.value = "";
                event.target.focus = true;
                event.preventDefault();
            }
        })
}



function controllerIdadeMediaIndividuos() {

    // let idade = document.querySelector("#idade");
    let media = calcularMediaIdades();
    retornoResultado("Média: " + media.toFixed(2))


}


function addIdade(idade) {
    let newIdade = parseInt(idade);
    if (!Number.isNaN(newIdade)) {

        idades.push(newIdade);
    }

}

function calcularMediaIdades() {

    let somatorio = 0;
    let cont = idades.length;
    for (let index = 0; index < cont; index++) {
        somatorio += idades[index];
    }
    return somatorio / cont;


}

// View

function retornoResultado(resultado) {
    document.querySelector("#saidaResultado").innerHTML = resultado;

}

function mostrarCont(cont) {
    document.querySelector("#contador").innerHTML = "<b>" + cont + "</b>";
}

