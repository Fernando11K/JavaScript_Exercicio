!(function () {

    const botao = document.getElementById("botaoVerifica")
    botao.addEventListener("click", controllerNumero);

    const botao2 = document.getElementById("retornaValores")
    botao.addEventListener("click", carregarValores);


})();

function controllerNumero() {
    let numero = parseInt(document.getElementById("numeroDigitado").value)
    let resultado = verificaNumero(numero);
    saidaDados(resultado);

    let valor = {
        numeroDigitado: numero,
        resultadoEncontrado: resultado

    }
    salvarResultado(valor);
}

function verificaNumero(numero) {
    if (numero % 2 == 0) {
        return "O número digitado é par"
    }
    return "O número digitado é ímpar"

}

function saidaDados(resultado) {
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function salvarResultado(obj) {

    localStorage.setItem("numero", obj.numeroDigitado)
    localStorage.setItem("resultado", obj.resultadoEncontrado)

    // pegar dados do local storage e converte para objeto
    let dataBase = JSON.parse(localStorage.getItem("valores"));

    // verificar se não tem dados
    if (!dataBase) {
        // criar um array
        dataBase = []
    }
    // adicionar o obj a lista resgatada do localStorage
    dataBase.push(obj);

    let json = JSON.stringify(dataBase);
    localStorage.setItem("valores", json);
}
const listaResultado = () => {
    let dadosNumero = localStorage.getItem("numero");
    let dadosResultado = localStorage.getItem("resultado");
    let dadosValores = localStorage.getItem("valores");
}

function carregarValores() {
    listaResultado();
}

