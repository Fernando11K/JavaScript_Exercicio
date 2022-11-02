class Jogo {
    // jogador = new Jogador();
    // palavra = '';
    // quantidaDeLetras = 0;
    constructor(jogador = new Jogador()) {
        this.jogador = jogador;
        this.palavra = '';
        this.quantidaDeLetras = 0;
    }

    comecarJogo() {
        this.setPalavra();
        this.setQuantidadeDeLetras();

    }
    getPalavra() {
        return this.palavra;
    }

    setPalavra() {
        let palavras = ["casa", "java", "números", "alunos", "constituição"];
        let index = Math.floor(Math.random() * palavras.length);
        this.palavra = palavras[index];
    }
    getQuantidadeDeLetras() {
        return this.quantidaDeLetras;
    }

    setQuantidadeDeLetras() {
        let contLetras = this.palavra.length;
        this.quantidaDeLetras = contLetras;
    }

    verificaFimJogo() {
    if (this.jogador.acertos == this.quantidaDeLetras) {
        return true;
    } else if (this.jogador.tentativas == 0) {
        return true;
    } else {
        return false;
    }

}




}