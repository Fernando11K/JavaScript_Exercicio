function controllerCalculo() {
    // let macas = document.getElementById("macasCompradas").value;
    // let resultado = calcularValorTotalCompra(macas);
    // saidaTexto("Valor total da compra R$: " + resultado.toFixed(2));
    saidaTexto("Valor total da compra R$: " + calcularValorTotalCompra(document.getElementById("macasCompradas").value).toFixed(2));
}

function calcularValorTotalCompra(macas = 0) {

    return (macas < 12) ? (macas * 0.30) : (macas * 0.25);

}


function saidaTexto(texto = '') {
    document.getElementById("saidaTexto").innerHTML = "<div class='alert alert-danger text-center'>" + texto + "</div>";
}