var valor1 = 0;
var valor2 = 0;

document
    .getElementById('operacao')
    .addEventListener('change', function () {
        var index = this.selectedIndex;
        operacao(index);
    });

(function () {

    document
        .getElementById("valor1")
        .addEventListener("change", function () {
            valor1 = parseInt(this.value);

        });

    document
        .getElementById("valor2")
        .addEventListener("change", function () {
            valor2 = parseInt(this.value);

        });

})();
function operacao(index) {
    switch (index) {
        case 1:
            soma();
            break;
        case 2:
            diferenca();
            break;
        case 3:
            divisao();
            break;
        case 4:
            produto();
            break;

        default:
            return null;
            break;
    }

}

function soma() {
    let resultado = valor1 + valor2;
    montarObjeto(valor1, valor2, 1, resultado)
    saidaResultado(resultado);
}

function diferenca() {
    let resultado = valor1 - valor2;
    montarObjeto(valor1, valor2, 2, resultado)
    saidaResultado(resultado);
}

function divisao() {
    let resultado = valor1 / valor2;
    montarObjeto(valor1, valor2, 3, resultado)
    saidaResultado(resultado);
}

function produto() {
    let resultado = valor1 * valor2;
    montarObjeto(valor1, valor2, 4, resultado)
    saidaResultado(resultado);
}

function saidaResultado(resultado) {
    document.getElementById("retorno").innerHTML = "<div class='alert alert-primary'>Resultado: " + resultado + "</div>";
}

function montarObjeto(numero1, numero2, opc, result) {

    let obj = {
        valor1: numero1,
        valor2: numero2,
        operacao: opc,
        resultado: result
    }
    salvarDados(obj);
    recuperarDados();
    return obj
}

function salvarDados(obj) {
    let storage = JSON.parse(localStorage.getItem("calculo"));

    if (storage == null) {
        storage = []
    }
    storage.push(obj);

    localStorage.setItem("calculo", JSON.stringify(storage))
    recuperarDados()

}
function recuperarDados() {
    let storage = JSON.parse(localStorage.getItem("calculo"));
    if (storage = ! null) {

        let texto = "";

        for (let i = 0; i < storage.length; i++) {
            texto += storage[i].valor1 + " - " + storage[i].valor2 + " - " +
                storage[i].operacao + " - " + storage[i].resultado + "<br>";
        }
        document.getElementById("dadosBanco").innerHTML = texto;
    }
}