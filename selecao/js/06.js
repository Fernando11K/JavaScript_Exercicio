function controllerValidacao() {
    var valor = parseFloat(document.getElementById("valor").value);

    var resposta = verificaPositivoNegativo(valor);
    saidaDados("O valor é: " + resposta);
}

function verificaPositivoNegativo(valor = 0) {
    if (valor == 0) {
        return "ZERO";
    } else if (valor > 0) {
        return "Positivo";
    } else {
        return "Negativo";
    }
}

function saidaDados(textoSaida) {
    document.getElementById("saidaTexto").innerHTML = textoSaida;
}