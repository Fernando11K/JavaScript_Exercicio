function controllerOrdem() {

    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);


    if (validadorDados(valor1, valor2)) {

        let resposta = ordernar(valor1, valor2);
        saidaDados("Ordem: " + resposta);
    }


}

function ordernar(valor1 = 0, valor2 = 0) {
    let aux;

    if (valor1 > valor2) {
        aux = valor1;
        valor1 = valor2
        valor2 = aux;
    }
    return valor1 + " , " + valor2;
}
function validadorDados(valor1, valor2) {


    if (!Number.isNaN(valor1)) {
        if (!Number.isNaN(valor2)) {
            if (valor1 != valor2) {
                return true;
            }
        }
    }
    alert("Operação com valores não permitidos");
    return false;



}

function saidaDados(textoSaida) {
    document.getElementById("saidaTexto").innerHTML = textoSaida;
}