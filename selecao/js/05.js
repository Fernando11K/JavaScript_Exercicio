function controllerValidacao() {
    let valor = parseFloat(document.getElementById("valor").value);

    (!Number.isNaN(valor)) ? (resposta = verificaPositivoNegativo(valor), saidaDados("O valor é: " + resposta))
        : (saidaDados("Valor fora do padrão!"));
}

function verificaPositivoNegativo(valor = 0) {


    if (valor >= 0) {

        return "positivo";
    } else {
        return "negativo";

    }

}


function saidaDados(textoSaida) {
    document.getElementById("saidaTexto").innerHTML = textoSaida;
}