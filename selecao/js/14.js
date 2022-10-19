function controllerVencedor() {

    let gremioGols = parseInt(document.getElementById("gremio").value);
    let interGols = parseInt(document.getElementById("inter").value);

    let error = validaDados(gremioGols, interGols);
    if (error != "") {
        alert(error);
        return;
    }
    saidaDados(verificarResultado(gremioGols, interGols));
}

function verificarResultado(gremio = 0, inter = 0) {

    return (gremio > inter) ? "./img/14-img/gremio.png" : (inter > gremio) ? "./img/14-img/inter.png"
        : "./img/14-img/empateGrenal.png";

}

function validaDados(gremioGols, interGols) {
    var error = "";
    if (isNaN(gremioGols)) {
        error += "Verifique o campo referente aos gols do Grêmio!" + "\n";
    }
    if (isNaN(interGols)) {
        error += "Verifique o campo referente aos gols do Inter!";
    }

    return error;



}

function saidaDados(texto) {

    document.getElementById("resultado").innerHTML = '<img src=' + texto + ' alt="imagem do resultado" width: "auto" height: "auto" >';

}
