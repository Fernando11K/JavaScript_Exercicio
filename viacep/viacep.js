let endereco = {};

!(function () {
    endereco = buscarCep("21070130");



})()

function buscarCep(cep) {

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        console.log(this.response);

        // data = JSON.parse(this.response);

        // let obj = {
        //     endereco: data
        // }
        // console.log(obj)

        return this.response.response;
    }
    xhttp.open("GET", "https://viacep.com.br/ws/" + cep + "/json/");
    xhttp.send()
}

