import Digimon from "./Digimon.js";

function main() {
    const koromon = new Digimon("Koromon", 2);    
    const agumon = new Digimon("Agumon", 3);
    const greymon = new Digimon("Greymon", 4);
    const tyranomon = new Digimon("Tyranomon", 4);
    const metalgreymon = new Digimon("MetalGreymon", 5);
    const metaltyranomon = new Digimon("MetalTyranomon", 5);
    const mastertyranomon = new Digimon("MasterTyranomon", 5);

    koromon.setImagem("https://wikimon.net/images/6/6e/Koromon.jpg");
    agumon.setImagem("https://wikimon.net/images/7/72/Agumon.jpg");
    greymon.setImagem("https://wikimon.net/images/6/6c/Greymon.jpg");
    tyranomon.setImagem("https://wikimon.net/images/2/29/Tyranomon.jpg");
    metalgreymon.setImagem("https://wikimon.net/images/d/d8/Metalgreymon.jpg");
    metaltyranomon.setImagem("https://wikimon.net/images/7/76/Metaltyranomon.jpg");
    mastertyranomon.setImagem("https://wikimon.net/images/4/40/Mastertyranomon.jpg");
    
    
    mastertyranomon.addPreEvolucao(tyranomon);
    metaltyranomon.addPreEvolucao(tyranomon);
    metalgreymon.addPreEvolucao(greymon);
    tyranomon.addPreEvolucao(agumon);
    greymon.addPreEvolucao(agumon);
    agumon.addPreEvolucao(koromon);

    console.log(Digimon.instancias.map(d => d.getNome()));

    for (let index = 0; index < Digimon.instancias.length; index++) {
        let digi = Digimon.instancias[index]
        let mensagem = `<div class="digimon_template" id="digimon_${digi.getNome()}">
            ${digi.getNome()} <br>
            <img src="${digi.getImagem()}" alt="${digi.getNome()}"> <br>
            nivel: ${digi.getNivel()} <br>
            pré-evoluções: ${digi.getPreEvolucoes().length > 0 ? digi.getPreEvolucoes().join(", ") : "Nenhuma"} <br>
            evoluções: ${digi.getEvolucoes().length > 0 ? digi.getEvolucoes().join(", ") : "Nenhuma"} <br>
        <div> <br>`;
        document.getElementById("exemplo").innerHTML += mensagem;   
        

    }
}

main();