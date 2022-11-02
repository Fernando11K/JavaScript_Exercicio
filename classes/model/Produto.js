class Produto {
    constructor(nome = '', descricao = '', valor = 0) {
        this.nome = nome;
        this.descricao = descricao;
        this.valor = valor;
        this.quantidade = 0;
        this.categoria = new Categoria();
        this.fotos = [];

    };
    // nome = '';
    // descricao = '';
    // valor = 1;
    // quantidade = 0;
    // Categoria = new Categoria();
    // fotos = []

    add() {
        console.log(this)
    }

    list() {

    }

    validData() {

    }
}