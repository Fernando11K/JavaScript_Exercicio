var globalSenhaValida = "1234";

function controllerAcesso() {
    let senha = document.getElementById("senha").value;

    let retornoValidacao = validaAcesso(senha);
    saidaTexto(retornoValidacao)

    if (retornoValidacao) {
        window.location.href = "http://www.google.com.br"
    }
    else {
        saidaTexto("Senha inváldia!");
    }
}

function validaAcesso(senha = "") {
    if (senha == globalSenhaValida) {
        return true; //"ACESSO PERMITIDO";
    }
    else {
        return false; //"ACESSO NEGADO";
    }


}

function saidaTexto(texto) {
    document.getElementById("saidaTexto").innerHTML = texto;
}