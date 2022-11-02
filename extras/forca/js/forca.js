!function () {
    var acertos = 0;
    var tentativas = 6;
    var letraDigitada = "";
    var palavra = sorteioPalavra();
    var quantidadeLetras = contarLetrasPalavra(palavra);
    montarLetrasTela(quantidadeLetras);

}();

function sorteioPalavra() {
    let palavras = ["casa", "java", "números", "alunos", "constituição"];
    let index = Math.floor(Math.random() * palavras.length);
    return palavras[index];
}

function contarLetrasPalavra(palavra = "") {

    let contLetras = palavra.length;
    return contLetras;
}

function verificaFimJogo(quantidadeLetras = 0, tentativas = 0, acertos = 0) {
    if (acertos == quantidadeLetras) {
        return true;
    } else if (tentativas == 0) {
        return true;
    } else {
        return false;
    }

}

// Visual---------------------------------------------------

function entradaLetra(objeto) {

    let letra = objeto.value;
    letraDigitada = letra
    objeto.value = "";
    // document.getElementById("letraSelecionada").innerHTML = letras;
}
function montarLetrasTela(quantidadeLetras = 0) {
    var letras = ""
    for (let i = 1; i <= quantidadeLetras; i++) {
        letras += "<span> ___ <span>";
    }
    document.getElementById("palavraSorteada").innerHTML = letras;
}
