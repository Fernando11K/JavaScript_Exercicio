!function () {
    let = palavra = sorteioPalavra();
    let quantidadeLetras = contarLetrasPalavra(palavra);
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

//---------------------------------------------------

function montarLetrasTela(quantidadeLetras = 0) {
    var letras = ""
    for (let i = 1; i <= quantidadeLetras; i++) {
        letras += "<span> ___ <span>";
    }
    document.getElementById("palavraSorteada").innerHTML = letras;
}