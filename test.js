import Digimon from "./Digimon.js";

function main() {

    window.scrollTo(0, 0);

    const botamon = new Digimon("Botamon", 1);
    const koromon = new Digimon("Koromon", 2);
    const agumon = new Digimon("Agumon", 3);
    const greymon = new Digimon("Greymon", 4);
    const tyranomon = new Digimon("Tyranomon", 4);
    const metalgreymon_vaccine = new Digimon("MetalGreymon (O)", 5);
    const metalgreymon_virus = new Digimon("MetalGreymon (B)", 5);
    const metaltyranomon = new Digimon("MetalTyranomon", 5);
    const mastertyranomon = new Digimon("MasterTyranomon", 5);

    const wargreymon = new Digimon("WarGreymon", 6);
    const blitzgreymon = new Digimon("BlitzGreymon", 6);
    const rusttyranomon = new Digimon("RustTyranomon", 6);
    const dinomon = new Digimon("Dinomon", 6);
    const mugendramon = new Digimon("Mugendramon", 6);

    botamon.setImagem("https://static.wikia.nocookie.net/digimonat/images/a/ae/Botamon_b.jpg/revision/latest?cb=20131112230618&path-prefix=pt");
    koromon.setImagem("https://wikimon.net/images/6/6e/Koromon.jpg");
    agumon.setImagem("https://wikimon.net/images/7/72/Agumon.jpg");
    greymon.setImagem("https://wikimon.net/images/6/6c/Greymon.jpg");
    tyranomon.setImagem("https://wikimon.net/images/2/29/Tyranomon.jpg");
    metalgreymon_vaccine.setImagem("https://wikimon.net/images/d/d8/Metalgreymon.jpg");
    metalgreymon_virus.setImagem("https://static.wikia.nocookie.net/digimon/images/0/02/MetalGreymon_%28Virus%29_b.jpg/revision/latest?cb=20120406033001");
    metaltyranomon.setImagem("https://wikimon.net/images/7/76/Metaltyranomon.jpg");
    mastertyranomon.setImagem("https://wikimon.net/images/4/40/Mastertyranomon.jpg");
    wargreymon.setImagem("https://static.wikia.nocookie.net/digimonat/images/4/49/WarGreymon_b.jpg/revision/latest?cb=20221031064703&path-prefix=pt");
    blitzgreymon.setImagem("https://static.wikia.nocookie.net/digimonat/images/b/bb/BlitzGreymon_b.jpg/revision/latest?cb=20210215214554&path-prefix=pt");
    rusttyranomon.setImagem("https://static.wikia.nocookie.net/digimonat/images/c/c1/RustTyranomon_b.jpg/revision/latest?cb=20230207171810&path-prefix=pt");
    dinomon.setImagem("https://static.wikia.nocookie.net/digimonat/images/c/c2/Dinomon_b.jpg/revision/latest?cb=20240808155030&path-prefix=pt");
    mugendramon.setImagem("https://static.wikia.nocookie.net/digimonat/images/e/ef/Mugendramon_b.jpg/revision/latest/scale-to-width-down/1000?cb=20230512041515&path-prefix=pt");

    wargreymon.addMultiPreEvolucao([metalgreymon_vaccine, mastertyranomon]);
    blitzgreymon.addMultiPreEvolucao([metalgreymon_virus, metalgreymon_vaccine]);
    rusttyranomon.addPreEvolucao(metaltyranomon);
    dinomon.addPreEvolucao(mastertyranomon);
    mugendramon.addMultiPreEvolucao([metalgreymon_virus, metaltyranomon]);
    mastertyranomon.addPreEvolucao(tyranomon);
    metaltyranomon.addPreEvolucao(tyranomon);
    metalgreymon_vaccine.addPreEvolucao(greymon);
    metalgreymon_virus.addPreEvolucao(greymon);
    tyranomon.addPreEvolucao(agumon);
    greymon.addPreEvolucao(agumon);
    agumon.addPreEvolucao(koromon);
    koromon.addPreEvolucao(botamon);
    


    exibirDigimons(Digimon.instancias_lv1, "lv1");
    exibirDigimons(Digimon.instancias_lv2, "lv2");
    exibirDigimons(Digimon.instancias_lv3, "lv3");
    exibirDigimons(Digimon.instancias_lv4, "lv4");
    exibirDigimons(Digimon.instancias_lv5, "lv5");
    exibirDigimons(Digimon.instancias_lv6, "lv6");

    criarSetasTodos();

}

main();

function exibirDigimons(instancias, id) {
    for (let index = 0; index < instancias.length; index++) {
        let digi = instancias[index];
        let nome_formatado = "digimon_" + digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");

        let mensagem = `<div class="digimon_template" id="${nome_formatado}">
            <div class="evos">
                <div class="evos_content">Pre-Evolucoes:<br>${digi.getPreEvolucoes().length > 0 ? digi.getPreEvolucoes().join(";<br>") : "Nenhuma"}</div>
            </div>
            <div class="nome">
                <div class="nome_center">
                    ${digi.getNome()}<br>
                    <img src="${digi.getImagem()}" alt="${digi.getNome()}"><br>
                    Nivel: ${digi.getNivel()} 
                </div>
            </div>
            <div class="evos">
                <div class="evos_content">Evolucoes:<br>${digi.getEvolucoes().length > 0 ? digi.getEvolucoes().join(";<br>") : "Nenhuma"}</div>
            </div>
        </div>`
        if (index !== instancias.length - 1) {
            mensagem += `
            <div class="separador"><div>`;
        }

        
        document.getElementById(id).innerHTML += mensagem;

        const elemento = document.querySelector(`#${nome_formatado}`);
        //console.log(digi.getNome());
        const coordenadas = elemento.getBoundingClientRect();
        //console.log(`X: ${coordenadas.left}, Y: ${coordenadas.top}`);

    }
}

function criarSetasTodos() {
    criarSetas(Digimon.instancias_lv1, Digimon.instancias_lv2);
    criarSetas(Digimon.instancias_lv2, Digimon.instancias_lv3);
    criarSetas(Digimon.instancias_lv3, Digimon.instancias_lv4);
    criarSetas(Digimon.instancias_lv4, Digimon.instancias_lv5);
    criarSetas(Digimon.instancias_lv5, Digimon.instancias_lv6);
    criarSetas(Digimon.instancias_lv6, null);

}

function criarSetas(instancias, instancias_proximo_nivel) {
   

    for (let index = 0; index < instancias.length; index++) {
        let digi = instancias[index];

        let nome_formatado = "digimon_" + digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");
        const elemento = document.querySelector(`#${nome_formatado}`);
        const coordenadas = elemento.getBoundingClientRect();

        let posicao_do_digi = encontrarPosicao(digi, instancias);
        //console.log(digi.getNome() + ": " + posicao_do_digi);

        let color = `rgba(${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, ${getRandomArbitrary(0, 255)}, 1)`;

        for (let i = 0; i < digi.getEvolucoes().length; i++) {
            let nome_atual_formatado = digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");
            let nome_evolucao_formatado = digi.getEvolucoes()[i].toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");
            let seta_nome_formatado = "seta_digimon_" + nome_atual_formatado + "_para_" + nome_evolucao_formatado;
            //console.log(coordenadas.left + " " + (coordenadas.left + 620) + " " + coordenadas.top + " " + (coordenadas.top + 110));
            
            //pegar coordenadas da evolucao
            const elemento_evo = document.querySelector(`#digimon_${nome_evolucao_formatado}`);
            const coordenadas_evo = elemento_evo.getBoundingClientRect();
            //console.log(`EVO - X: ${coordenadas_evo.left}, Y: ${coordenadas_evo.top}`);
            
            let comprimento = distancia(coordenadas.left + 625, coordenadas.top + 110, coordenadas_evo.left, coordenadas_evo.top + 110);
            //console.log("Comprimento da seta: " + comprimento);

            let graus = angulo(coordenadas.left + 625, coordenadas.top + 110, coordenadas_evo.left, coordenadas_evo.top + 110);
            //console.log("Ângulo da seta: " + graus);

            


            

            let mensagem = `<seta id = "${seta_nome_formatado}" style = "
            width: ${comprimento}px;
            left: ${coordenadas.left + 625}px; 
            top: ${coordenadas.top + 110}px;
            transform: rotate(${graus}deg);
            background-color: ${color};
            " > `;
            document.querySelector(".setas").innerHTML += mensagem;

        }
    }
}


function encontrarPosicao(Digimon, instancias_lv) {
    const index = instancias_lv.indexOf(Digimon);
    return index;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function distancia(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

function angulo(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.atan2(dy, dx) * (180 / Math.PI);
}