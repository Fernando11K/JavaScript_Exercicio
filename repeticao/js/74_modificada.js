!(function () {
    controllerNumeros()


})()
function controllerNumeros() {

    let listNumeros = ordenar(contarNumeros());
    let listMultiplos = contarMultiplos(listNumeros);
    let listRepetidos = verifRepetidos(listNumeros);

    let template = "<div class='row'>"
    template += "<div class='col-12'>";
    template += "   <h3>Lista de Numeros </h3>";
    template += "<p>" + listNumeros.join(", ") + "</p>";
    template += "</div>";

    template += "<div class='col-6'>";
    template += "   <h3>Lista de Multiplos </h3>";
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
function contarNumeros() {
    let listNumeros = [];
    for (let index = 1; index <= 100; index++) {
        // listNumeros.push(index);
        listNumeros.push(Math.floor(Math.random() * 1000));

    }
    return listNumeros;
}

// Múltiplos de 10
function contarMultiplos(listNumeros = []) {
    let listMultiplos = [];
    for (let index = 0; index <= listNumeros.length; index++) {
        if (listNumeros[index] % 10 == 0) {
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
