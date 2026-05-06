import Digimon from "./Digimon.js";

function main() {
    
    window.scrollTo(0, 0);
    window.scroll(0, 0);

    
    const Popomon = new Digimon("Popomon", 1);
    Popomon.setImagem("https://wikimon.net/images/0/06/Popomon.jpg")
    const Punimon = new Digimon("Punimon", 1);
    Punimon.setImagem("https://wikimon.net/images/a/a0/Punimon.jpg")

    const Frimon = new Digimon("Frimon", 2);
    Frimon.setImagem("https://wikimon.net/images/b/b8/Frimon.jpg");
    const Tsunomon = new Digimon("Tsunomon", 2);
    Tsunomon.setImagem("https://wikimon.net/images/5/59/Tunomon.jpg");

    const Liollmon = new Digimon("Liollmon", 3);
    Liollmon.setImagem("https://wikimon.net/images/7/7f/Liollmon.jpg");
    const Elecmon = new Digimon("Elecmon", 3);
    Elecmon.setImagem("https://wikimon.net/images/d/dc/Elecmon.jpg");

    const Leomon = new Digimon("Leomon", 4);
    Leomon.setImagem("https://wikimon.net/images/6/68/Leomon.jpg");
    const Liamon = new Digimon("Liamon", 4);
    Liamon.setImagem("https://wikimon.net/images/7/71/Liamon.jpg");
    const Cougarmon = new Digimon("Cougarmon", 4);
    Cougarmon.setImagem("https://wikimon.net/images/b/bc/Cougarmon.jpg");
    const Lowemon = new Digimon("Lowemon", 4);
    Lowemon.setImagem("https://wikimon.net/images/f/f7/Lowemon2.jpg");
    const Aegiomon = new Digimon("Aegiomon", 4);
    Aegiomon.setImagem("https://wikimon.net/images/9/98/Aegiomon2.jpg");

    const Panjyamon = new Digimon("Panjyamon", 5);
    Panjyamon.setImagem("https://wikimon.net/images/8/80/Panjyamon.jpg");
    const Grappuleomon = new Digimon("Grappuleomon", 5);
    Grappuleomon.setImagem("https://wikimon.net/images/4/41/Grappuleomon.jpg");
    const Loaderleomon = new Digimon("Loaderleomon", 5);
    Loaderleomon.setImagem("https://wikimon.net/images/8/88/Loaderliomon.jpg");
    const Murasamemon = new Digimon("Murasamemon", 5);
    Murasamemon.setImagem("https://wikimon.net/images/9/99/Murasamemon.jpg");
    const Kaiserleomon = new Digimon("Kaiserleomon", 5);
    Kaiserleomon.setImagem("https://wikimon.net/images/3/35/Kaiserleomon.jpg");
    const Aegiochusmon = new Digimon("Aegiochusmon", 5);
    Aegiochusmon.setImagem("https://wikimon.net/images/b/bd/Aegiochusmon.jpg");
    const Aegiochusmon_Blue = new Digimon("Aegiochusmon B", 5);
    Aegiochusmon_Blue.setImagem("https://wikimon.net/images/0/08/Aegiochusmon_blue.jpg");
    const Aegiochusmon_Green = new Digimon("Aegiochusmon G", 5);
    Aegiochusmon_Green.setImagem("https://wikimon.net/images/d/d4/Aegiochusmon_green.jpg");
    const Aegiochusmon_Holy = new Digimon("Aegiochusmon H", 5);
    Aegiochusmon_Holy.setImagem("https://wikimon.net/images/5/51/Aegiochusmon_holy.jpg");
    const Aegiochusmon_Dark = new Digimon("Aegiochusmon D", 5);
    Aegiochusmon_Dark.setImagem("https://wikimon.net/images/7/7a/Aegiochusmon_dark.jpg");
    

    const Regulumon = new Digimon("Regulumon", 6);
    Regulumon.setImagem("https://wikimon.net/images/f/f1/Regulumon.jpg");
    const Saberleomon = new Digimon("Saberleomon", 6);
    Saberleomon.setImagem("https://wikimon.net/images/e/e2/Saberleomon.jpg");
    const Heavyleomon = new Digimon("Heavyleomon", 6);
    Heavyleomon.setImagem("https://wikimon.net/images/9/9d/Heavyleomon.jpg");
    const Bancholeomon = new Digimon("Bancholeomon", 6);
    Bancholeomon.setImagem("https://wikimon.net/images/8/8f/Bancholeomon.jpg");
    const Habakirimon = new Digimon("Habakirimon", 6);
    Habakirimon.setImagem("https://wikimon.net/images/a/a8/Dcg-ST23-05.jpg");
    const Ancientsphinxmon = new Digimon("Ancientsphinxmon", 6);
    Ancientsphinxmon.setImagem("https://wikimon.net/images/8/84/Ancientsphinxmon.jpg");
    const Jupitermon = new Digimon("Jupitermon", 6);
    Jupitermon.setImagem("https://wikimon.net/images/e/e0/Jupitermon.jpg");
    

    Popomon.addEvolucao(Frimon);
    Punimon.addEvolucao(Tsunomon);

    Frimon.addEvolucao(Liollmon);
    Tsunomon.addEvolucao(Elecmon);

    Liollmon.addMultiEvolucao([Leomon, Liamon, Cougarmon, Lowemon]); 
    Elecmon.addMultiEvolucao([Aegiomon, Leomon])

    Leomon.addMultiEvolucao([Panjyamon, Grappuleomon]);
    Liamon.addEvolucao(Loaderleomon);
    Cougarmon.addEvolucao(Murasamemon);
    Lowemon.addEvolucao(Kaiserleomon);
    Aegiomon.addMultiEvolucao([Aegiochusmon, Aegiochusmon_Blue, Aegiochusmon_Green, Aegiochusmon_Holy, Aegiochusmon_Dark]);

    Panjyamon.addMultiEvolucao([Regulumon, Saberleomon]);
    Grappuleomon.addMultiEvolucao([Saberleomon, Heavyleomon, Bancholeomon]);
    Loaderleomon.addMultiEvolucao([Heavyleomon, Bancholeomon]);
    Murasamemon.addEvolucao(Habakirimon);
    Kaiserleomon.addEvolucao(Ancientsphinxmon);
    Aegiochusmon.addEvolucao(Jupitermon);
    Aegiochusmon_Blue.addEvolucao(Jupitermon);
    Aegiochusmon_Green.addEvolucao(Jupitermon);
    Aegiochusmon_Holy.addEvolucao(Jupitermon);
    Aegiochusmon_Dark.addEvolucao(Jupitermon);

    exibirDigimonTodos();   
    criarSetasTodos();
    Desfocar()

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


        document.getElementById(id).insertAdjacentHTML("beforeend", mensagem);

        let elemento = document.querySelector(`#${nome_formatado}`);
        //console.log(digi.getNome());        
        let coordenadas = elemento.getBoundingClientRect();
        //console.log(`X: ${coordenadas.left}, Y: ${coordenadas.top}`);

        elemento.addEventListener("click", () => {
            FocarDigimon(digi);
        });

    }
}

function exibirDigimonTodos(){
    exibirDigimons(Digimon.instancias_lv1, "lv1");
    exibirDigimons(Digimon.instancias_lv2, "lv2");
    exibirDigimons(Digimon.instancias_lv3, "lv3");
    exibirDigimons(Digimon.instancias_lv4, "lv4");
    exibirDigimons(Digimon.instancias_lv5, "lv5");
    exibirDigimons(Digimon.instancias_lv6, "lv6");
}

function criarSetasTodos() {
    window.scrollTo(0, 0);
    window.scroll(0, 0);
    criarSetas(Digimon.instancias_lv1, Digimon.instancias_lv2);
    criarSetas(Digimon.instancias_lv2, Digimon.instancias_lv3);
    criarSetas(Digimon.instancias_lv3, Digimon.instancias_lv4);
    criarSetas(Digimon.instancias_lv4, Digimon.instancias_lv5);
    criarSetas(Digimon.instancias_lv5, Digimon.instancias_lv6);
    criarSetas(Digimon.instancias_lv6, null);
    window.scrollTo(0, 0);
    window.scroll(0, 0);

}

function criarSetas(instancias, instancias_proximo_nivel) {
    

    for (let index = 0; index < instancias.length; index++) {
        let digi = instancias[index];

        let nome_formatado = "digimon_" + digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");
        const elemento = document.querySelector(`#${nome_formatado}`);
        const coordenadas = elemento.getBoundingClientRect();

        let posicao_do_digi = encontrarPosicao(digi, instancias);
        //console.log(digi.getNome() + ": " + posicao_do_digi);

        let color = getRandomColor(30, 220);

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
            ;
            " > 
                <seta_content id = "${seta_nome_formatado}_color" style = "background-color: ${color}; width: 100%; height: 100%;"></seta_content>
                <seta_after id = "${seta_nome_formatado}_after" style = "border-left: 10px solid ${color};"></seta_after>
            </seta>`;
            document.querySelector(".setas").insertAdjacentHTML("beforeend", mensagem);

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

function FocarDigimon(Digi) {
    //console.log("Focando no Digimon: " + Digi.getNome());
    let Digi_Evolucoes = Digi.getLaterEvolucoes();
    //console.log("Evoluções: " + Digi_Evolucoes.map(evolucao => evolucao.getNome()));
    let Digi_PreEvolucoes = Digi.getLaterPreEvolucoes();
    //console.log("Pré-evoluções: " + Digi_PreEvolucoes.map(pre_evo => pre_evo.getNome()));
    //console.log("")
    let Digi_Pre_e_Evos = [...Digi_Evolucoes, ...Digi_PreEvolucoes];

    let resto = Digimon.instancias.filter(digimon => !Digi_Pre_e_Evos.includes(digimon) && digimon !== Digi);
    //console.log("Resto: " + resto.map(digimon => digimon.getNome()));

    for (let i = 0; i < Digi_Pre_e_Evos.length; i++) {
        let nome_formatado = "digimon_" + Digi_Pre_e_Evos[i].getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");
        const elemento = document.querySelector(`#${nome_formatado}`);
        elemento.style.opacity = "1";
        elemento.style.border = "1px solid #ccc"
    }
    for (let i = 0; i < resto.length; i++) {
        let nome_formatado = "digimon_" + resto[i].getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");
        const elemento = document.querySelector(`#${nome_formatado}`);
        elemento.style.opacity = "0.1";
        elemento.style.border = "1px solid #ccc"
    }

    let nome_formatado = "digimon_" + Digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");
    const elemento = document.querySelector(`#${nome_formatado}`);
    elemento.style.opacity = "1";
    elemento.style.border = "5px solid #8f8f8f"

    document.querySelectorAll("seta").forEach(seta => {
        seta.style.opacity = "0.1";
    });

    FocarDigimonEvosSetas(Digi);
    FocarDigimonPreEvosSetas(Digi);    





}

function FocarDigimonEvosSetas(Digi) {
    const evolucoes = Digi.getEvolucoesIntern();
    if (evolucoes.length === 0) {
    } else {
        for (let i = 0; i < evolucoes.length; i++) {
            let nome = `#seta_digimon_${Digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}_para_${evolucoes[i].getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}`
            const seta_elemento = document.querySelector(nome);
            seta_elemento.style.opacity = "1";
            FocarDigimonEvosSetas(evolucoes[i]);
        }
    }
}

function FocarDigimonPreEvosSetas(Digi) {
    const pre_evolucoes = Digi.getPreEvolucoesIntern();
    if (pre_evolucoes.length === 0) {
    } else {
        for (let i = 0; i < pre_evolucoes.length; i++) {
            let nome = `#seta_digimon_${pre_evolucoes[i].getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}_para_${Digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}`
            const seta_elemento = document.querySelector(nome);

            seta_elemento.style.opacity = "1";
            FocarDigimonPreEvosSetas(pre_evolucoes[i]);
        }
    }
}

function Desfocar() {
    document.addEventListener("click", (evento) => {

    const clicouDentro = evento.target.closest(".digimon_template");

    if (!clicouDentro) {
        const digimons = document.querySelectorAll(".digimon_template");
        digimons.forEach(digimon => {
            digimon.style.opacity = "1";
            digimon.style.border = "1px solid #ccc"
        });
        document.querySelectorAll("seta").forEach(seta => {
            seta.style.opacity = "1";
        });
    }

});
}


function getRandomColor(min, max) {

    let r = getRandomArbitrary(min, max);
    let g = getRandomArbitrary(min, max);
    let b = getRandomArbitrary(min, max);

    return `rgba(${r}, ${g}, ${b}, 1)`; 
}