function controllerVencedor() {

    gremioGols = parseInt(document.getElementById("gremio").value);
    interGols = parseInt(document.getElementById("inter").value);


    return (validaDados(gremioGols, interGols)) ? saidaDados(verificarResultado(gremioGols, interGols))
        : alert("Um campo ou mais não foi preenchido!")
}

function verificarResultado(gremio = 0, inter = 0) {

    return (gremio > inter) ? "./img/14-img/gremio.png" : (inter > gremio) ? "./img/14-img/inter.png"
        : "./img/14-img/empateGrenal.png";

}

function validaDados(gremio = 0, inter = 0) {
    return (!isNaN(gremio) && !isNaN(inter)) ? true : false;
}

function saidaDados(texto) {

    document.getElementById("resultado").innerHTML = '<img src=' + texto + ' alt="imagem do resultado" width: "auto" height: "auto" >';

}
