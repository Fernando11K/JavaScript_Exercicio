!(function () {
    controllerNumeros()


})()
function controllerNumeros() {

    let listNumeros = ordenar(contarNumeros(100));
    let multiplo = 2;
    let listMultiplos = contarMultiplos(listNumeros, multiplo);
    let listRepetidos = verifRepetidos(listNumeros);

    let template = "<div class='row'>"
    template += "<div class='col-12'>";
    template += "   <h3>Lista de Numeros </h3>";
    template += "<p>" + listNumeros.join(", ") + "</p>";
    template += "</div>";

    template += "<div class='col-6'>";
    template += "   <h3>Lista de Multiplos de "+multiplo+"</h3>";
    template += "   <p>" + listMultiplos.join(", ") + "</p>";
    template += "</div>";

    template += "<div class='col-6'>";
    template += "   <h3>Lista de Repetidos </h3>";
    template += "    <p>" + listRepetidos.join(", ") + "</p>";
    template += "</div>";

    template += "</div>";

    saidaResultado(template);

    // Pega o evento click de cada parágrafo
    document.querySelectorAll('p').forEach(paragrafo => {
        paragrafo.addEventListener('click', e => {
            console.log(e)
        })
    })

    // let paragrafo = document.querySelectorAll('p');
    // for (let index = 0; index < paragrafo.length; index++) {
    //     paragrafo[index].addEventListener('click', e => {
    //         console.log(e)
    //     })

    // }

}

function saidaResultado(texto) {
    document.querySelector('#saidaResultado').innerHTML = texto;
}


// Contar de 1 a 100
function contarNumeros(quantidade = 0, sorteio = false, limiteSorteio = 1000) {
    let listNumeros = [];
    for (let index = 1; index <= quantidade; index++) {
        if (sorteio) {
            listNumeros.push(Math.floor(Math.random() * limiteSorteio));

        } else {
            listNumeros.push(index);
        }

    }
    return listNumeros;
}

// Múltiplos de 10
function contarMultiplos(listNumeros = [], multiplo = 10) {
    let listMultiplos = [];
    for (let index = 0; index <= listNumeros.length; index++) {
        if (listNumeros[index] % multiplo == 0) {
            listMultiplos.push(listNumeros[index])
        }

    }
    return listMultiplos;

}
// Verifica números repetidos
function verifRepetidos(listNumeros = []) {
    let listRepetidos = []
    for (let indexA = 0; indexA < listNumeros.length; indexA++) {
        for (let indexB = 0; indexB < listNumeros.length; indexB++) {
            if (indexA != indexB && listNumeros[indexA] == listNumeros[indexB]) {
                listRepetidos.push(listNumeros[indexA]);
            }
        }
    }
    return listRepetidos;
}

// Ordena os números

function ordenar(listNumeros = []) {
    let aux = 0
    for (let indexA = 0; indexA < listNumeros.length; indexA++) {
        for (let indexB = 0; indexB < listNumeros.length; indexB++) {
            if (indexA != indexB && listNumeros[indexA] < listNumeros[indexB]) {
                aux = listNumeros[indexA];
                listNumeros[indexA] = listNumeros[indexB];
                listNumeros[indexB] = aux
            }
        }
    }
    return listNumeros;
}
