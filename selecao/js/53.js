var aluno = {
    nota1: 0,
    nota2: 0,
    nota3: 0,
    nota4: 0,
    media: 0,
    resultado: 0
}

!(function () {

    let alunos = listDataAluno();
    assembleTable(alunos);

})()

function controllerCalculate() {

    aluno.nota1 = parseFloat(document.getElementById("nota1").value),
        aluno.nota2 = parseFloat(document.getElementById("nota2").value),
        aluno.nota3 = parseFloat(document.getElementById("nota3").value),
        aluno.nota4 = parseFloat(document.getElementById("nota4").value),

        aluno.media = calculateMedia(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4).toFixed(1),
        aluno.resultado = checkAprovação(aluno.media),
        aluno.totalNotas = calculateTotal(aluno.nota1, aluno.nota2, aluno.nota3, aluno.nota4)

    outputMediaNotas(aluno.media);
    outputAprovação(aluno.resultado);
    outputTotalNotas(aluno.totalNotas)
    addDataAluno(aluno);

    let alunos = listDataAluno();
    assembleTable(alunos);
    // outputAprovação(checkAprovação(outputMediaNotas(calculateMedia(nota1, nota2, nota3, nota4).toFixed(1))));


}

function clearForm() {
    let valores = document.querySelectorAll(".form-control");
    for (let i = 0; i < valores.length; i++) {
        valores[i].value = '';

    }

}
// Cálculos
function calculateMedia(nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0) {
    return (nota1 + nota2 + nota3 + nota4) / 4

}

function calculateTotal(nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0) {
    return (nota1 + nota2 + nota3 + nota4)

}

function checkAprovação(media = 0) {
    if (media >= 5) {
        return "Aprovado"
    }
    return "Reprovado"

}
// 
// Saída da Dados
function outputAprovação(situacao) {
    document.getElementById("situacao").textContent = situacao;

}

function outputMediaNotas(media) {
    return document.getElementById("media").value = media;
}

function outputTotalNotas(total) {
    return document.getElementById("total").value = total;

}

// Adição de objeto e conversão para armazenamento em Local Storage
function addDataAluno(obj = {}) {
    let database = JSON.parse(localStorage.getItem("alunos"));

    if (!database) {
        database = []
    }
    database.push(obj);

    let jsonObj = JSON.stringify(database);

    localStorage.setItem("alunos", jsonObj)
}

function listDataAluno() {
    let database = JSON.parse(localStorage.getItem("alunos"));

    if (!database) {
        database = []
    }
    return database;

}

function assembleTable(listData = []) {
    let table = '<table class = "table ">'
    table += "<tr>"
    table += "<th> Nota 1" + "</th>";
    table += "<th> Nota 2" + "</th>";
    table += "<th> Nota 3" + "</th>";
    table += "<th> Nota 4" + "</th>";
    table += "<th> Total" + "</th>";
    table += "<th> Media" + "</th>";
    table += "<th> Resultado" + "</th>";
    table += "</tr>"
    for (let i = 0; i < listData.length; i++) {

        table += "<tr>"
        table += "<td>" + listData[i].nota1 + "</td>";
        table += "<td>" + listData[i].nota2 + "</td>";
        table += "<td>" + listData[i].nota3 + "</td>";
        table += "<td>" + listData[i].nota4 + "</td>";
        table += "<td>" + listData[i].totalNotas + "</td>";
        table += "<td>" + listData[i].media + "</td>";
        table += "<td>" + listData[i].resultado + "</td>";
        table += "</tr>"
    }
    table += "</table>";
    document.querySelector("#saidaTabela").innerHTML = table;
}

