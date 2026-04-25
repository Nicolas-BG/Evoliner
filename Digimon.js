export default class Digimon {
    //setar atributos

    #nome;
    #nivel;
    #imagem = "";
    #evolucoes = [];
    #pre_evolucoes = [];
    static instancias = [];


    //setar construtor

    constructor(nome, nivel) {
        if (typeof nivel === 'number') {
            if (nivel < 1 || nivel > 6) {
                throw new Error("Nível inválido");
            }
            switch (nivel) {
                case 1:
                    nivel = "Baby 1";
                    break;
                case 2:
                    nivel = "Baby 2";
                    break;
                case 3:
                    nivel = "Child";
                    break;
                case 4:
                    nivel = "Adult";
                    break;
                case 5:
                    nivel = "Perfect";
                    break;
                case 6:
                    nivel = "Ultimate";
                    break;
            }
        } else {
            if (nivel !== "Baby 1" && nivel !== "Baby 2" && nivel !== "Child" && nivel !== "Adult" && nivel !== "Perfect" && nivel !== "Ultimate") {
                throw new Error("Nível inválido");
            }
        }
        this.#nome = nome;
        this.#nivel = nivel;
        Digimon.instancias.push(this);
    }

    //Nome

    getNome() {
        return this.#nome;
    }
    setNome(nome) {
        this.#nome = nome;
    }

    //Nvel

    getNivel(){
        return this.#nivel;
    }
    setNivel(nivel) {
        if (nivel !== "Baby 1" && nivel !== "Baby 2" && nivel !== "Child" && nivel !== "Adult" && nivel !== "Perfect" && nivel !== "Ultimate") {
            throw new Error("Nível inválido");
        }
        this.#nivel = nivel;
    }

    //Imagem

    getImagem() {
        return this.#imagem;
    }

    setImagem(imagem) {
        this.#imagem = imagem;
    }

    //Evoluções e Pré-evoluções
    //Evoluções

    getEvolucoes() {
        return this.#evolucoes.map(evolucao => evolucao.getNome());
    }

    #getEvolucoesIntern() {
        return this.#evolucoes;
    }

    addEvolucao(evolucao) {
        this.#evolucoes.push(evolucao);
        evolucao.addPreEvolucaoSimple(this);
    }

    addEvolucaoSimple(evolucao) {
        this.#evolucoes.push(evolucao);
    }

    addMultiEvolucao(evolucoes) {
        for (let i = 0; i < evolucoes.length; i++) {
            evolucoes[i].addPreEvolucaoSimple(this);
        }
        this.#evolucoes.push(...evolucoes);
    }

    deleteEvolucao(evolucao) {
        const index = this.#evolucoes.indexOf(evolucao);
        if (index > -1) {
            this.#evolucoes.splice(index, 1);
        }
    }

    resetEvolucoes(){
        this.#evolucoes = [];
    }

    getLaterEvolucoes() {
        const evolucoes = this.#getEvolucoesIntern(); 
        let laterEvolucoes = [];
        if (evolucoes.length === 0) {
            return laterEvolucoes;
        }
        laterEvolucoes = [...this.getEvolucoes()];

        for (let i = 0; i < evolucoes.length; i++) {
            if (evolucoes[i].#getEvolucoesIntern().length > 0) {
                laterEvolucoes.push(...evolucoes[i].getLaterEvolucoes());
            }
        }        

        return laterEvolucoes;
    }

    //Pré-Evoluções

    getPreEvolucoes(){
        return this.#pre_evolucoes.map(pre_evolucao => pre_evolucao.getNome());
    }

    #getPreEvolucoesIntern() {
        return this.#pre_evolucoes;
    }

    addPreEvolucao(pre_evolucao) {
        this.#pre_evolucoes.push(pre_evolucao);
        pre_evolucao.addEvolucaoSimple(this);
    }

    addPreEvolucaoSimple(pre_evolucao) {
        this.#pre_evolucoes.push(pre_evolucao);
    }

    addMultiPreEvolucao(pre_evolucoes) {
        for (let i = 0; i < pre_evolucoes.length; i++) {
            pre_evolucoes[i].addEvolucaoSimple(this);
        }
        this.#pre_evolucoes.push(...pre_evolucoes);
    }

    deletePreEvolucao(pre_evolucao) {
        const index = this.#pre_evolucoes.indexOf(pre_evolucao);
        if (index > -1) {
            this.#pre_evolucoes.splice(index, 1);
        }
    }

    resetPreEvolucoes(){
        this.#pre_evolucoes = [];
    }
 ///////
    getLaterPreEvolucoes() {
        const pre_evolucoes = this.#getPreEvolucoesIntern(); 
        let laterPreEvolucoes = [];
        if (pre_evolucoes.length === 0) {
            return laterPreEvolucoes;
        }
        laterPreEvolucoes = [...this.getPreEvolucoes()];

        for (let i = 0; i < pre_evolucoes.length; i++) {
            if (pre_evolucoes[i].#getPreEvolucoesIntern().length > 0) {
                laterPreEvolucoes.push(...pre_evolucoes[i].getLaterPreEvolucoes());
            }
        }        

        return laterPreEvolucoes;
    }



    resetAllEvolucoes() {
        this.#pre_evolucoes = [];
        this.#evolucoes = [];
    }

}

