// !(function() { 
//     controllerCalculate();
// })()

function controllerCalculate() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let nota4 = parseFloat(document.getElementById("nota4").value);

    outputAprovação(checkAprovação(outputMediaNotas(calculateMedia(nota1, nota2, nota3, nota4))));


}

function clearForm() {
    let valores = document.querySelectorAll(".form-control");
    for (let i = 0; i < valores.length; i++) {
        valores[i].value = '';

    }

}

function calculateMedia(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4) / 4

}

function calculateTotal(nota1, nota2, nota3, nota4) {
    return (nota1 + nota2 + nota3 + nota4)

}

function checkAprovação(media = 0) {
    if (media >= 5) {
        return "Aprovado"
    }
    return "Reprovado"

}

function outputAprovação(situacao) {
    document.getElementById("situacao").textContent = situacao;

}

function outputMediaNotas(media) {
    return document.getElementById("media").value = media;
}

function outputTotalNotas(nota1, nota2, nota3, nota4) {
    let total = nota1 + nota2 + nota3 + nota4
    retornoTotal(total)
}


