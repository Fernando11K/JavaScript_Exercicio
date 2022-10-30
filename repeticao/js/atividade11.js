!(function () {

    document
        .querySelector('#botaoFixa')
        .addEventListener('click', capturaTabelaFixa);

    document
        .querySelector('#botaoDinamica')
        .addEventListener('click', capturaTabuadaDinamica);


    document
        .querySelector('#tipoTabuada')
        .addEventListener('change', function () {
            let index = this.selectedIndex;
            tipoTabuada(index);
        });


})()

function tipoTabuada(index) {

    if (index == 1) {
        document.querySelector('#formularioF').classList.remove("d-none");
        document.querySelector('#formularioD').classList.add("d-none");
    }
    if (index == 2) {

        document.querySelector('#formularioD').classList.remove("d-none");
        document.querySelector('#formularioF').classList.add("d-none");
    }


}

function capturaTabelaFixa() {
    let multiplicando = parseInt(document.querySelector('#tabuadaFixa').value)

    tabuadaFixa(multiplicando)

}

function capturaTabuadaDinamica() {
    let tabuadaInicial = parseInt(document.querySelector('#tabuadaInicial').value)
    let tabuadaFinal = parseInt(document.querySelector('#tabuadaFinal').value)

    tabuadaDinamica(tabuadaInicial, tabuadaFinal)

}

function tabuadaFixa(multiplicando = 0) {

    for (let index = multiplicando; index == multiplicando; index++) {
        multiplicador(multiplicando)

    }
}
function tabuadaDinamica(multiplicandoInicial = 0, tabuadaFinal = 0) {

    for (let index = multiplicandoInicial; multiplicandoInicial <= tabuadaFinal; multiplicandoInicial++) {
        multiplicador(multiplicandoInicial)
    }

}

function multiplicador(multiplicandoInicial = 0) {
    let operacao = [];
    for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
        let resultado = multiplicandoInicial * multiplicador;

        operacao.push(multiplicandoInicial + " x " + multiplicador + " = " + resultado)

    }
    retornoResultado(operacao, multiplicandoInicial)
}

//
function retornoResultado(operacao, multiplicandoInicial) {

    let table = '<table class = "table table-bordered bg-white p-0 m-0 ">'
    table += "<tr>";
    table += "<th> Tabuada de " + multiplicandoInicial + "</th>";
    table += "</tr>"

    operacao.forEach(multiplicacao => {
        table += "<tr>"
        table += '<td>' + multiplicacao + '</td>'
        table += "<tr>"
    });

    table += "</table>"
    document.getElementById("saida").innerHTML += table






}