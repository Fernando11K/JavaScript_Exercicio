function controllerOrdem() {
    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    var resposta = ordernar(valor1, valor2, valor3);
    saidaDados("Ordem: " + resposta);
}

function ordernar(valor1 = 0, valor2 = 0, valor3 = 0) {

    var temp = 0;


    if (valor1 > valor2) {

        temp = valor1;
        valor1 = valor2;
        valor2 = temp;
    }
    if (valor1 > valor3) {

        temp = valor1;
        valor1 = valor3;
        valor3 = temp;
    }


    if (valor2 > valor3) {
        temp = valor3;
        valor3 = valor2;
        valor2 = temp;

    }

    return "" + valor1 + ";" + valor2 + ";" + valor3;

}

function saidaDados(textoSaida) {
    document.getElementById("saidaTexto").innerHTML = textoSaida;
}