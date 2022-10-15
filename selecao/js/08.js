function controllerDireitoAtivo() {
    let = anoNascimento = document.getElementById("anoNascimento").value;
    let retorno = verificaDireito(anoNascimento);

    exibeResposta(retorno);



}
function verificaDireito(anoNascimento) {
    idadeMinima = 16;
    return (2022 - anoNascimento >= idadeMinima) ? "Você poderá votar neste ano" : "Você não poderá votar neste ano";


}

function exibeResposta(texto) {

    document.getElementById("retornoTexto").innerHTML = texto;

}