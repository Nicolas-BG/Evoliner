import Digimon from "./Digimon.js";

function main() {
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

    wargreymon.addPreEvolucao(metalgreymon_vaccine);
    blitzgreymon.addPreEvolucao(metalgreymon_virus);
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
    

    console.log(Digimon.instancias.map(d => d.getNome()));
    console.log(Digimon.instancias_lv1.map(d => d.getNome()));
    console.log(Digimon.instancias_lv2.map(d => d.getNome()));
    console.log(Digimon.instancias_lv3.map(d => d.getNome()));
    console.log(Digimon.instancias_lv4.map(d => d.getNome()));
    console.log(Digimon.instancias_lv5.map(d => d.getNome()));
    console.log(Digimon.instancias_lv6.map(d => d.getNome()));

    console.log("")

    exibirDigimons(Digimon.instancias_lv1, "lv1");
    exibirDigimons(Digimon.instancias_lv2, "lv2");
    exibirDigimons(Digimon.instancias_lv3, "lv3");
    exibirDigimons(Digimon.instancias_lv4, "lv4");
    exibirDigimons(Digimon.instancias_lv5, "lv5");
    exibirDigimons(Digimon.instancias_lv6, "lv6");

}

main();

function exibirDigimons(instancias, id) {
    for (let index = 0; index < instancias.length; index++) {
        let digi = instancias[index];
        let mensagem = `<div class="digimon_template" id="digimon_${digi.getNome()}">
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
        //let mensagem = `<div class="digimon_template" id="digimon_${digi.getNome()}">
        //    ${digi.getNome()} 
        //    <img src="${digi.getImagem()}" alt="${digi.getNome()}"> <br>
        //    nivel: ${digi.getNivel()} <br>
        //    pré-evoluções: ${digi.getPreEvolucoes().length > 0 ? digi.getPreEvolucoes().join(", ") : "Nenhuma"} <br>
        //    evoluções: ${digi.getEvolucoes().length > 0 ? digi.getEvolucoes().join(", ") : "Nenhuma"} <br>
        //</div>`;
        if (index !== instancias.length - 1) {
            mensagem += `
            <div class="separador"><div>`;
        }
        console.log(mensagem);
        document.getElementById(id).innerHTML += mensagem;

    }
}