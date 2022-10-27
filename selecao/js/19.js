!(function () {
    let contagem = somaNumerospares();
    saidaDados("Lista: " + contagem);
})();


function somaNumerospares() {
    let resp = '';
    let somaPares = 0;
    for (let i = 100; i <= 200; i++) {
        resp += i + ' ';
        if (i % 2 == 0) {
            somaPares += i;
        }
    }
    return [resp +"<br> Soma dos números pares: " + somaPares];
}

function saidaDados(texto) {

    document.getElementById("saidaResultado").innerHTML = texto
}

