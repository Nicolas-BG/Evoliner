import Digimon from "./Digimon.js";

var fechado = false;

/*
var evos_selecionadas = [];
var pre_evos_selecionadas = [];
var slides_selecionadas = [];
*/

function main() {

    window.scrollTo(0, 0);
    window.scroll(0, 0);

    /*
    const Popomon = new Digimon("Popomon", 1);
    Popomon.setImagem("https://wikimon.net/images/0/06/Popomon.jpg")
    const Punimon = new Digimon("Punimon", 1);
    Punimon.setImagem("https://wikimon.net/images/a/a0/Punimon.jpg")
    const Puttimon = new Digimon("Puttimon", 1);
    Puttimon.setImagem("https://wikimon.net/images/c/c4/Puttimon.jpg")

    const Frimon = new Digimon("Frimon", 2);
    Frimon.setImagem("https://wikimon.net/images/b/b8/Frimon.jpg");
    const Tsunomon = new Digimon("Tsunomon", 2);
    Tsunomon.setImagem("https://wikimon.net/images/5/59/Tunomon.jpg");
    const Cupimon = new Digimon("Cupimon", 2);
    Cupimon.setImagem("https://wikimon.net/images/0/06/Cupimon.jpg");

    const Liollmon = new Digimon("Liollmon", 3);
    Liollmon.setImagem("https://wikimon.net/images/7/7f/Liollmon.jpg");
    const Elecmon = new Digimon("Elecmon", 3);
    Elecmon.setImagem("https://wikimon.net/images/d/dc/Elecmon.jpg");
    const Lucemon = new Digimon("Lucemon", 3);
    Lucemon.setImagem("https://wikimon.net/images/e/e7/Lucemon2.jpg");


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
    const Lucemon_Falldown_Mode = new Digimon("Lucemon FM", 5);
    Lucemon_Falldown_Mode.setImagem("https://wikimon.net/images/7/76/Lucemon_falldown.jpg");

    const Regulumon = new Digimon("Regulumon", 6);
    Regulumon.setImagem("https://wikimon.net/images/f/f1/Regulumon.jpg");
    const Saberleomon = new Digimon("Saberleomon", 6);
    Saberleomon.setImagem("https://wikimon.net/images/e/e2/Saberleomon.jpg");
    const Dinotigermon = new Digimon("Dinotigermon", 6);
    Dinotigermon.setImagem("https://wikimon.net/images/thumb/3/34/Dinotigermon.jpg/600px-Dinotigermon.jpg");
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
    const Lucemon_Satan_Mode = new Digimon("Lucemon SM", 6);
    Lucemon_Satan_Mode.setImagem("https://wikimon.net/images/f/f6/Lucemon_satan2.jpg");

    const Tlalocmon = new Digimon("Tlalocmon", 7);
    Tlalocmon.setImagem("https://wikimon.net/images/8/8c/Tlalocmon.jpg");
    const Bancholeomon_Burst_Mode = new Digimon("Bancholeomon BM", 7);
    Bancholeomon_Burst_Mode.setImagem("https://wikimon.net/images/7/76/DS46_Bancholeomon_burst.jpg");
    const Chaosmon = new Digimon("Chaosmon", 7);
    Chaosmon.setImagem("https://wikimon.net/images/thumb/9/93/Chaosmon.jpg/600px-Chaosmon.jpg");
    const Chaosmon_Valdur_Arm = new Digimon("Chaosmon VA", 7);
    Chaosmon_Valdur_Arm.setImagem("https://wikimon.net/images/a/a3/Chaosmon_valdurarm.jpg");
    const Jupitermon_Wrath_Mode = new Digimon("Jupitermon WM", 7);
    Jupitermon_Wrath_Mode.setImagem("https://wikimon.net/images/1/1f/Jupitermon_wrath.jpg");

    const Ultimate_Chaosmon = new Digimon("Ultimatechaosmon", 8);
    Ultimate_Chaosmon.setImagem("https://wikimon.net/images/c/cc/Ultimatechaosmon.jpg");


    Popomon.addEvolucao(Frimon);
    Punimon.addEvolucao(Tsunomon);
    Puttimon.addEvolucao(Cupimon);


    Frimon.addEvolucao(Liollmon);
    Tsunomon.addEvolucao(Elecmon);
    Cupimon.addEvolucao(Lucemon);


    Liollmon.addMultiEvolucao([Leomon, Liamon, Cougarmon, Lowemon]);
    Elecmon.addMultiEvolucao([Aegiomon, Leomon])
    Lucemon.addEvolucao(Lucemon_Falldown_Mode);

    Leomon.addMultiEvolucao([Panjyamon, Grappuleomon]);
    Leomon.addSlideEvolucao(Lowemon);
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
    Lucemon_Falldown_Mode.addEvolucao(Lucemon_Satan_Mode);

    Saberleomon.addSlideEvolucao(Dinotigermon);

    Saberleomon.addEvolucao(Tlalocmon);
    Bancholeomon.addMultiEvolucao([Bancholeomon_Burst_Mode, Chaosmon, Chaosmon_Valdur_Arm]);
    Jupitermon.addEvolucao(Jupitermon_Wrath_Mode);

    Chaosmon.addEvolucao(Ultimate_Chaosmon);
    Chaosmon_Valdur_Arm.addEvolucao(Ultimate_Chaosmon);
    */

    Start_list();
    Insert_Tab();
    Save_event()
    Load_Event()


}

main();

function Save_event() {
    let botao = document.querySelector(`#save_button`);
    botao.addEventListener("click", () => {
        Save_JSON();
    });
}

function Save_JSON() {
    var resposta = confirm("Deseja realmente Salvar a lista de digimons?");
    
    const input_archivo_nome = document.querySelector("#archive_name");
    var nome_archivo = input_archivo_nome.value.trim();
    if (nome_archivo == "") {
        nome_archivo = "Digimon.json";
    } else {
        nome_archivo = nome_archivo.replace(".json", "");
        nome_archivo = nome_archivo + ".json";
        nome_archivo = nome_archivo.replaceAll(/[\\/:*?"<>|]/g, '');
    }


    if (resposta == true) {

        var all_intancias = [...Digimon.instancias_lv1, ...Digimon.instancias_lv2, ...Digimon.instancias_lv3, ...Digimon.instancias_lv4, ...Digimon.instancias_lv5, ...Digimon.instancias_lv6, ...Digimon.instancias_lv7, ...Digimon.instancias_lv8];
        var digimons_para_json = all_intancias.map(digimon => {
            return {
                nome: digimon.getNome(),
                imagem: digimon.getImagem(),
                nivel: digimon.getNivel(),
                pre_evolucoes: [digimon.getPreEvolucoes()],
                evolucoes: [digimon.getEvolucoes()],
                slide_evolucoes: [digimon.getSlideEvolucoes()]
            };
        });

        const dadosBlob = new Blob([JSON.stringify(digimons_para_json, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(dadosBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = nome_archivo;
        link.click();

        URL.revokeObjectURL(url);

        input_archivo_nome.value = "";
    }
    
}

function Load_Event() { 
    let botao = document.querySelector(`#load_button`);
    const arquivoInput = document.querySelector(`#Archivo_Digi`);

    botao.addEventListener("click", () => {
        arquivoInput.click();
    });

    arquivoInput.addEventListener('change', (evento) => {
        const arquivo = evento.target.files[0];

        if (arquivo) {
            //console.log('Arquivo selecionado:', arquivo.name);
            Load_JSON(arquivo);
        }
    });
}

async function Load_JSON(arquivo) {
    let conteudo = await arquivo.text();
    let dados = JSON.parse(conteudo);

    //console.log(dados);

    for (let i = 0; i < dados.length; i++) {
        var New_Digimon = new Digimon(dados[i].nome, dados[i].nivel);
        New_Digimon.setImagem(dados[i].imagem);
        for (let j = 0; j < dados[i].pre_evolucoes[0].length; j++) {
            New_Digimon.addPreEvolucao(find_digimon(dados[i].pre_evolucoes[0][j]));
        }
    }

    for (let i = 0; i < dados.length; i++) {
        var digimon_atual = find_digimon(dados[i].nome);
        for (let j = 0; j < dados[i].slide_evolucoes[0].length; j++) {
            var Slide_evo = find_digimon(dados[i].slide_evolucoes[0][j])
            if (!digimon_atual.getSlideEvolucoesIntern().includes(Slide_evo)) {
                digimon_atual.addSlideEvolucao(Slide_evo);
            }            
        }
    }


    Start_list_restart()
}

function Start_list() {
    document.getElementById("lv1").innerHTML = "";
    document.getElementById("lv2").innerHTML = "";
    document.getElementById("lv3").innerHTML = "";
    document.getElementById("lv4").innerHTML = "";
    document.getElementById("lv5").innerHTML = "";
    document.getElementById("lv6").innerHTML = "";
    document.getElementById("lv7").innerHTML = "";
    document.getElementById("lv8").innerHTML = "";
    document.querySelector(".setas").innerHTML = "";

    exibirDigimonTodos();
    criarSetasTodos();
    Desfocar()

}

function Start_list_restart() {
    const posicaoX = window.scrollX;
    const posicaoY = window.scrollY;

    Start_list()

    window.scrollTo(posicaoX, posicaoY);
    window.scroll(posicaoX, posicaoY);
}

function formatar_nome(nome) {
    let nome_formatado = nome.toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "");
    return nome_formatado;
}

function formatar_nome_simples(nome) {
    let nome_formatado = nome.toLowerCase()
        .replace(/\s+/g, " ");
    return nome_formatado;
}

function find_digimon(nome) {
    //console.log("Procurar Passo 1 - Procurando Digimon: " + nome);
    for (let i = 0; i < Digimon.instancias.length; i++) {
        //console.log(`Procurar Passo 2.${i + 1} - Verificando Digimon: ${Digimon.instancias[i].getNome()}`);
        if (formatar_nome_simples(Digimon.instancias[i].getNome()) === formatar_nome_simples(nome)) {
            //console.log("Digimon encontrado: " + Digimon.instancias[i].getNome());
            return Digimon.instancias[i];
        }
    }
    //console.log("Digimon não encontrado: " + nome);
    return null;
}

function Insert_Tab() {
    let botao = document.querySelector(`.close_button`);
    botao.addEventListener("click", () => {
        close();
    });

    imagePreview();

    const selectLevel = document.getElementById('level_select');
    const selectedLevelValue = selectLevel.value;

    levelstabs(selectedLevelValue);

    selectLevel.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        levelstabs(selectedValue);
    });

    addEvo("#add_pre_evo", "#pre_evos_added", "#pre_evos_select");
    addEvo("#add_slide", "#slides_added", "#slides_select");
    addEvo("#add_evo", "#evos_added", "#evos_select");

    let insert_botao = document.querySelector(`#insert_button`);
    insert_botao.addEventListener("click", () => {
        insert_digimon();
    });
}

function Insert_Tab_Restart() {
    document.querySelector("#input_name").value = "";
    document.querySelector("#input_image_link").value = "";

    const selectLevel = document.getElementById('level_select');
    selectLevel.value = 1;
    const selectedLevelValue = selectLevel.value;

    levelstabs(selectedLevelValue);
    const imagePreview = document.getElementById('preview_image');
    imagePreview.src = "https://wikimon.net/images/6/61/Digimon_noimage.jpg"



}

function insert_digimon() {
    //console.log("");
    //console.log(" --- ");
    //console.log("");
    //console.log("Passo 0 - Iniciando processo de inserção de Digimon, verificando dados...");
    let nome = Tirar_tracos(document.querySelector("#input_name").value);
    let link_da_imagem = document.querySelector("#input_image_link").value;
    let nivel = document.querySelector("#level_select").value;
    if (nome == "") {
        alert("Por favor, preencha o nome do Digimon.");
        return;
    }
    if (find_digimon(nome) != null) {
        alert("Esse Digimon já foi adicionado, adicione outro");
        return;
    }
    if (link_da_imagem == "") {
        alert("Por favor, preencha o link da imagem.");
        return;
    }
    if (!isValidImageUrl(link_da_imagem)) {
        alert("Por favor, insira um link de imagem válido.");
        return;
    }
    //console.log(`Nome: ${nome}, Link da Imagem: ${link_da_imagem}, Nivel: ${nivel}`);
    //console.log(`Nome: ${nome}, Link da Imagem: ${link_da_imagem}, Nivel: ${nivel}`);

    let evos = getEvosFromBox("#evos_added");
    let pre_evos = getEvosFromBox("#pre_evos_added");
    let slide_evos = getEvosFromBox("#slides_added");
    //console.log("Evoluções: " + evos);
    //console.log("Pré-Evoluções: " + pre_evos);
    //console.log("Evoluções em Slide: " + slide_evos);

    //console.log("Passo 1 - Criando novo Digimon...");    
    var New_Digimon = new Digimon(nome, parseInt(nivel));
    //console.log("Passo 2 - Digimon novo criado, agora configurando imagem...");    
    New_Digimon.setImagem(link_da_imagem);
    //console.log("Passo 3 - Imagem configurada, agora adicionando evoluções...");
    for (let index = 0; index < evos.length; index++) {
        //console.log(`Passo 4.${index + 1} - Adicionando evolução: ${evos[index]}`);
        New_Digimon.addEvolucao(find_digimon(evos[index]));
    }
    for (let index = 0; index < pre_evos.length; index++) {
        //console.log(`Passo 5.${index + 1} - Adicionando pré-evolução: ${pre_evos[index]}`);
        New_Digimon.addPreEvolucao(find_digimon(pre_evos[index]));
    }
    for (let index = 0; index < slide_evos.length; index++) {
        //console.log(`Passo 6.${index + 1} - Adicionando evolução em slide: ${slide_evos[index]}`);
        New_Digimon.addSlideEvolucao(find_digimon(slide_evos[index]));
    }
    //console.log("Passo 7 - Evoluções adicionadas, agora salvando coordenadas...");



    Start_list_restart()



    //console.log("Digimon adicionado: " + New_Digimon.getNome());
    alert(`${nome} adicionado com sucesso!`);

    Insert_Tab_Restart();
    //console.log("Reiniciando aba de inserção...");
}

function getEvosFromBox(box_id) {
    const separador = `<separador></separador></div>`;
    const evos_div = document.querySelector(box_id);

    //let conteudo_formatado = evos_div.innerHTML.replaceAll("\n", "").replaceAll("\t", "").replaceAll(" ", "");
    let conteudo_formatado = evos_div.innerHTML.replaceAll("\n", "").replaceAll("\t", "");

    if (conteudo_formatado !== ``) {
        var evos_separadas = conteudo_formatado.split(separador);
        evos_separadas.pop();
        var evos_separadas_formatadas = evos_separadas.map(evo_html => getNomeSemHtml(evo_html));
        //console.log("______")
        //console.log("Evos separadas: " + evos_separadas_formatadas);        
        evos_separadas_formatadas = evos_separadas_formatadas.filter(evo => evo !== null);
        for (let index = 0; index < evos_separadas_formatadas.length; index++) {
            evos_separadas_formatadas[index] = Tirar_tracos(evos_separadas_formatadas[index]);
            //console.log(`Evo formatada ${index + 1}: ${evos_separadas_formatadas[index]}`);
        }
        //console.log("Evos separadas sem traco: " + evos_separadas_formatadas);
        return evos_separadas_formatadas;
    } else {
        return [];
    }
}

function getNomeSemHtml(html) {
    const match = html.match(/>\s*([^<]+)\s*<button/i);
    return match ? match[1].trim() : null;
}

function Tirar_tracos(nome) {
    return nome.replace(/\s*[-–—]\s*/g, "")   // remove qualquer tipo de traço com espaços ao redor
        .trim();
}

function addEvo(button_id, box_id, select_id) {
    //console.log(`Step 0.1 - Adicionando evento de clique para o botão: ${button_id}`);
    let botao = document.querySelector(button_id);
    //console.log(`Step 0.2 - Adicionando o event listener`);
    botao.addEventListener("click", () => {
        //console.log(" *** ")
        //console.log(`Step 1 - Pegando a query select`);
        let select = document.querySelector(select_id);
        //console.log(`Step 2 - Pegando a box de evoluções adicionadas`);
        let box = document.querySelector(box_id);

        //console.log(`Step 3 - Verificando se algo foi selecionado`);
        if (select.value == "") {
            //console.log(`Step 3.1 - Nada selecionado`);
            return;
        }

        //console.log(`Step 3.2 - Algo foi selecionado: ${select.value}`);

        //console.log(`Step 4 - Formatando o nome para comparação`);
        let nome_formatado = formatar_nome_simples(select.value);


        //console.log(`Step 4.1 - Nome formatado: ${nome_formatado}`);

        //console.log(`Step 5 - Verificando se a evolução já foi adicionada`);



        //

        //const contemEvo = box.innerHTML.includes(nome_formatado);
        let nome_para_teste = `- ${nome_formatado} -`;
        const regex = new RegExp(`\\b${nome_para_teste}\\b`, 'i');





        if (regex.test(box.innerHTML)) {
            //console.log(`Step 5.1 - Evolução já adicionada: ${nome_formatado}`);
            return;
        }


        //console.log(`Step 5.2 - Evolução ainda não adicionada, prosseguindo...`);

        //console.log(`Step 6 - Adicionando evolução na box...`);

        let nome_formatado_para_classes = formatar_nome(select.value);

        box.insertAdjacentHTML(
            "beforeend",
            `<div id="added_${nome_formatado_para_classes}">
                - ${select.value} - <button class="delete_evo_button" id="delete_evo_${nome_formatado_para_classes}">X</button>
        <separador></separador></div>`
        );
        //console.log(`Step 6.ok - Evolução adicionada: ${nome_formatado}`);
        //console.log(`Step 7 - Adicionando botão de exclusão para: ${nome_formatado}`);
        addDeleteButton(nome_formatado_para_classes);
        //console.log(`Tudo adicionado com sucesso`);
    });
}

function addDeleteButton(value) {
    const evo_added = document.querySelector(`#added_${value}`);
    const delete_button = document.querySelector(`#delete_evo_${value}`);

    delete_button.addEventListener("click", () => {
        evo_added.remove();
    });
}

function levelstabs(level_number) {

    const evo = document.getElementById("evos_select");
    evo.innerHTML = `<option value="" disabled selected>_____</option>`
    const evo_box = document.getElementById("evos_added");
    evo_box.innerHTML = "";

    const pre_evo = document.getElementById("pre_evos_select");
    pre_evo.innerHTML = `<option value="" disabled selected>_____</option>`
    const pre_evo_box = document.getElementById("pre_evos_added");
    pre_evo_box.innerHTML = "";

    const slide_evo = document.getElementById("slides_select");
    slide_evo.innerHTML = `<option value="" disabled selected>_____</option>`
    const slide_evo_box = document.getElementById("slides_added");
    slide_evo_box.innerHTML = "";


    switch (level_number) {
        case "1":
            //console.log("level: 1");

            for (let index = 0; index < Digimon.instancias_lv2.length; index++) {
                evo.innerHTML += `<option value="${Digimon.instancias_lv2[index].getNome()}">${Digimon.instancias_lv2[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv1.length; index++) {
                slide_evo.innerHTML += `<option value="${Digimon.instancias_lv1[index].getNome()}">${Digimon.instancias_lv1[index].getNome()}</option>`;
            }

            break;
        case "2":
            //console.log("level: 2");

            for (let index = 0; index < Digimon.instancias_lv3.length; index++) {
                evo.innerHTML += `<option value="${Digimon.instancias_lv3[index].getNome()}">${Digimon.instancias_lv3[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv1.length; index++) {
                pre_evo.innerHTML += `<option value="${Digimon.instancias_lv1[index].getNome()}">${Digimon.instancias_lv1[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv2.length; index++) {
                slide_evo.innerHTML += `<option value="${Digimon.instancias_lv2[index].getNome()}">${Digimon.instancias_lv2[index].getNome()}</option>`;
            }

            break;
        case "3":
            //console.log("level: 3");

            for (let index = 0; index < Digimon.instancias_lv4.length; index++) {
                evo.innerHTML += `<option value="${Digimon.instancias_lv4[index].getNome()}">${Digimon.instancias_lv4[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv2.length; index++) {
                pre_evo.innerHTML += `<option value="${Digimon.instancias_lv2[index].getNome()}">${Digimon.instancias_lv2[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv3.length; index++) {
                slide_evo.innerHTML += `<option value="${Digimon.instancias_lv3[index].getNome()}">${Digimon.instancias_lv3[index].getNome()}</option>`;
            }

            break;
        case "4":
            //console.log("level: 4");

            for (let index = 0; index < Digimon.instancias_lv5.length; index++) {
                evo.innerHTML += `<option value="${Digimon.instancias_lv5[index].getNome()}">${Digimon.instancias_lv5[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv3.length; index++) {
                pre_evo.innerHTML += `<option value="${Digimon.instancias_lv3[index].getNome()}">${Digimon.instancias_lv3[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv4.length; index++) {
                slide_evo.innerHTML += `<option value="${Digimon.instancias_lv4[index].getNome()}">${Digimon.instancias_lv4[index].getNome()}</option>`;
            }
            break;
        case "5":
            //console.log("level: 5");

            for (let index = 0; index < Digimon.instancias_lv6.length; index++) {
                evo.innerHTML += `<option value="${Digimon.instancias_lv6[index].getNome()}">${Digimon.instancias_lv6[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv4.length; index++) {
                pre_evo.innerHTML += `<option value="${Digimon.instancias_lv4[index].getNome()}">${Digimon.instancias_lv4[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv5.length; index++) {
                slide_evo.innerHTML += `<option value="${Digimon.instancias_lv5[index].getNome()}">${Digimon.instancias_lv5[index].getNome()}</option>`;
            }

            break;
        case "6":
            //console.log("level: 6");

            for (let index = 0; index < Digimon.instancias_lv7.length; index++) {
                evo.innerHTML += `<option value="${Digimon.instancias_lv7[index].getNome()}">${Digimon.instancias_lv7[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv5.length; index++) {
                pre_evo.innerHTML += `<option value="${Digimon.instancias_lv5[index].getNome()}">${Digimon.instancias_lv5[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv6.length; index++) {
                slide_evo.innerHTML += `<option value="${Digimon.instancias_lv6[index]}">${Digimon.instancias_lv6[index].getNome()}</option>`;
            }

            break;
        case "7":
            //console.log("level: 7");

            for (let index = 0; index < Digimon.instancias_lv8.length; index++) {
                evo.innerHTML += `<option value="${Digimon.instancias_lv8[index].getNome()}">${Digimon.instancias_lv8[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv6.length; index++) {
                pre_evo.innerHTML += `<option value="${Digimon.instancias_lv6[index].getNome()}">${Digimon.instancias_lv6[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv7.length; index++) {
                slide_evo.innerHTML += `<option value="${Digimon.instancias_lv7[index].getNome()}">${Digimon.instancias_lv7[index].getNome()}</option>`;
            }

            break;
        case "8":
            //console.log("level: 8");

            for (let index = 0; index < Digimon.instancias_lv7.length; index++) {
                pre_evo.innerHTML += `<option value="${Digimon.instancias_lv7[index].getNome()}">${Digimon.instancias_lv7[index].getNome()}</option>`;
            }

            for (let index = 0; index < Digimon.instancias_lv8.length; index++) {
                slide_evo.innerHTML += `<option value="${Digimon.instancias_lv8[index].getNome()}">${Digimon.instancias_lv8[index].getNome()}</option>`;
            }

            break;
        default:
        //console.log("Erro");
    }


}

function imagePreview() {
    const selectImageLink = document.getElementById('input_image_link');

    let temporizador;
    const tempoParaPausa = 800;

    selectImageLink.addEventListener('input', (event) => {
        const ImageLink = event.target.value;
        clearTimeout(temporizador);

        temporizador = setTimeout(() => {
            const imagePreview = document.getElementById('preview_image');
            if (isValidImageUrl(ImageLink) === true) {
                imagePreview.src = ImageLink;
            } else {
                imagePreview.src = "https://wikimon.net/images/6/61/Digimon_noimage.jpg"
            }
        }, tempoParaPausa);


    });
}

function isValidImageUrl(text) {
    try {
        const url = new URL(text);

        // verifica se é http ou https
        if (!["http:", "https:"].includes(url.protocol)) {
            return false;
        }

        // extensões comuns de imagem
        const imageExtensions = [
            ".jpg",
            ".jpeg",
            ".png",
            ".gif",
            ".webp",
            ".bmp",
            ".svg",
            ".avif"
        ];

        return imageExtensions.some(ext =>
            url.pathname.toLowerCase().endsWith(ext)
        );
    } catch {
        return false;
    }
}



function close() {
    let aba = document.querySelector(`.Insert_Template`);
    if (fechado == false) {
        //console.log("fechando");        
        aba.style = `opacity: 0.25;
            z-index: -999;
            pointer-events: none;
            -webkit-user-select: none;
            -ms-user-select: none;    
            user-select: none;  `
        fechado = true;
    } else {
        //console.log("abrindo")
        aba.style = `opacity: 1;
            z-index: 10;
            pointer-events: default;
            -webkit-user-select: default;
            -ms-user-select: default;    
            user-select: default;  `
        fechado = false;
    }


}

function exibirDigimons(instancias, id) {
    for (let index = 0; index < instancias.length; index++) {
        let digi = instancias[index];
        let nome_formatado = "digimon_" + formatar_nome(digi.getNome());

        let mensagem = `<div class="digimon_template" id="${nome_formatado}">
            <div class="evos">
                <div class="evos_content">Pre-Evolucoes:<br>${digi.getPreEvolucoes().length > 0 ? digi.getPreEvolucoes().join(";<br>") : "Nenhuma"}
                 <div style = "color: red;">
                    ${digi.getSlideEvolucoes().length > 0 ? digi.getSlideEvolucoes().join(" (SLD);<br>") : ""}
                    ${digi.getSlideEvolucoes().length > 0 ? " (SLD)" : ""}
                </div>
                </div>
            </div>
            <div class="nome">
                <div class="nome_center">
                    ${digi.getNome()}<br>
                    <img src="${digi.getImagem()}" alt="${digi.getNome()}"><br>
                    Nivel: ${digi.getNivel() == "Ultimate+" || digi.getNivel() == "Ultimate++" ? "Ultimate" : digi.getNivel()} <button class="Delete_Digimon_Button" id="delete_${nome_formatado}">X</button>
                </div>
            </div>
            <div class="evos">
                <div class="evos_content">Evolucoes:<br>${digi.getEvolucoes().length > 0 ? digi.getEvolucoes().join(";<br>") : "Nenhuma"}
                <div style = "color: red;">
                    ${digi.getSlideEvolucoes().length > 0 ? digi.getSlideEvolucoes().join(" (SLD);<br>") : ""}
                    ${digi.getSlideEvolucoes().length > 0 ? " (SLD)" : ""}
                </div>
                </div>
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


        elemento.addEventListener("click", (evento) => {

            let elemento_clicado = document.querySelector(`#${nome_formatado}`);
            if (elemento_clicado) {
                var opacidade = elemento_clicado.style.opacity;
                if (!opacidade) {
                    opacidade = 1;
                }
                if (opacidade == 1) {
                    if (!evento.target.closest(`#delete_${nome_formatado}`)) {
                        FocarDigimon(digi);
                    }
                } else {
                    FocarDigimon(digi);
                }
            }
        });

        let botao_deletar = document.querySelector(`#delete_${nome_formatado}`);
        botao_deletar.addEventListener("click", () => {
            let elemento_clicado = document.querySelector(`#${nome_formatado}`);

            var opacidade = elemento_clicado.style.opacity;
            if (!opacidade) {
                opacidade = 1;
            }
            if (opacidade == 1) {
                var Digi_a_Deletar = find_digimon(digi.getNome());
                Deletar_Digimon(Digi_a_Deletar);
            }

        });




    }
}

function Deletar_Digimon(Digi) {
    var resposta = confirm("Deseja realmente deletar " + Digi.getNome() + "? Essa ação não pode ser desfeita.");

    if (resposta == true) {
        Digi.delete();


        Start_list_restart()

    }

}

function exibirDigimonTodos() {
    exibirDigimons(Digimon.instancias_lv1, "lv1");
    exibirDigimons(Digimon.instancias_lv2, "lv2");
    exibirDigimons(Digimon.instancias_lv3, "lv3");
    exibirDigimons(Digimon.instancias_lv4, "lv4");
    exibirDigimons(Digimon.instancias_lv5, "lv5");
    exibirDigimons(Digimon.instancias_lv6, "lv6");
    exibirDigimons(Digimon.instancias_lv7, "lv7");
    exibirDigimons(Digimon.instancias_lv8, "lv8");
}

function criarSetasTodos() {
    window.scrollTo(0, 0);
    window.scroll(0, 0);
    criarSetas(Digimon.instancias_lv1, Digimon.instancias_lv2);
    criarSetas(Digimon.instancias_lv2, Digimon.instancias_lv3);
    criarSetas(Digimon.instancias_lv3, Digimon.instancias_lv4);
    criarSetas(Digimon.instancias_lv4, Digimon.instancias_lv5);
    criarSetas(Digimon.instancias_lv5, Digimon.instancias_lv6);
    criarSetas(Digimon.instancias_lv6, Digimon.instancias_lv7);
    criarSetas(Digimon.instancias_lv7, Digimon.instancias_lv8);
    criarSetas(Digimon.instancias_lv8, null);
    window.scrollTo(0, 0);
    window.scroll(0, 0);

}

function criarSetas(instancias, instancias_proximo_nivel) {


    for (let index = 0; index < instancias.length; index++) {
        let digi = instancias[index];

        let nome_formatado = "digimon_" + formatar_nome(digi.getNome());
        const elemento = document.querySelector(`#${nome_formatado}`);
        const coordenadas = elemento.getBoundingClientRect();

        let posicao_do_digi = encontrarPosicao(digi, instancias);
        //console.log(digi.getNome() + ": " + posicao_do_digi);

        let color = getRandomColor(30, 220);

        for (let i = 0; i < digi.getEvolucoes().length; i++) {
            let nome_atual_formatado = formatar_nome(digi.getNome());
            let nome_evolucao_formatado = formatar_nome(digi.getEvolucoes()[i]);
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

        if (digi.getSlideEvolucoes().length > 0) {

            for (let i = 0; i < digi.getSlideEvolucoes().length; i++) {
                let nome_atual_formatado = formatar_nome(digi.getNome());
                let nome_slide_formatado = formatar_nome(digi.getSlideEvolucoes()[i]);
                let seta_nome_formatado = "seta_digimon_" + nome_atual_formatado + "_para_" + nome_slide_formatado;
                //console.log(coordenadas.left + " " + (coordenadas.left + 620) + " " + coordenadas.top + " " + (coordenadas.top + 110));

                let seta_nome_reverso = "#seta_digimon_" + nome_slide_formatado + "_para_" + nome_atual_formatado;
                let existe_seta = document.querySelector(seta_nome_reverso);

                if (existe_seta == null) {

                    //pegar coordenadas da evolucao
                    const elemento_evo = document.querySelector(`#digimon_${nome_slide_formatado}`);
                    const coordenadas_evo = elemento_evo.getBoundingClientRect();
                    //console.log(`EVO - X: ${coordenadas_evo.left}, Y: ${coordenadas_evo.top}`);

                    let comprimento = distancia(coordenadas.left + 312, coordenadas.top + 222, coordenadas_evo.left + 312, coordenadas_evo.top - 6);

                    let graus = angulo(coordenadas.left + 312, coordenadas.top + 222, coordenadas_evo.left + 312, coordenadas_evo.top - 6);


                    let mensagem = `<seta id = "${seta_nome_formatado}" style = "
                    width: ${comprimento}px;
                    left: ${coordenadas.left + 312}px; 
                    top: ${coordenadas.top + 226}px;
                    transform: rotate(${graus}deg);
                    ;
                    " >              
                      <seta_before id = "${seta_nome_formatado}_before" style = "border-right: 10px solid ${color};"></seta_before>   
                      <seta_content id = "${seta_nome_formatado}_color" style = "background-color: ${color}; width: 100%; height: 100%;"></seta_content>
                      <seta_after id = "${seta_nome_formatado}_after" style = "border-left: 10px solid ${color};"></seta_after>
                </seta>`;
                    document.querySelector(".setas").insertAdjacentHTML("beforeend", mensagem);
                }
            }
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




    for (let i = 0; i < resto.length; i++) {
        let nome_formatado = "digimon_" + formatar_nome(resto[i].getNome());
        const elemento = document.querySelector(`#${nome_formatado}`);
        elemento.style.opacity = "0.1";
        elemento.style.border = "1px solid #ccc"
    }
    for (let i = 0; i < Digi_Pre_e_Evos.length; i++) {
        let nome_formatado = "digimon_" + formatar_nome(Digi_Pre_e_Evos[i].getNome());
        const elemento = document.querySelector(`#${nome_formatado}`);
        elemento.style.opacity = "1";
        elemento.style.border = "1px solid #ccc"
    }



    let nome_formatado = "digimon_" + formatar_nome(Digi.getNome());
    const elemento = document.querySelector(`#${nome_formatado}`);
    elemento.style.opacity = "1";
    elemento.style.border = "5px solid #8f8f8f"

    document.querySelectorAll("seta").forEach(seta => {
        seta.style.opacity = "0.1";
    });

    FocarDigimonEvosSetas(Digi);
    FocarDigimonPreEvosSetas(Digi);
    FocarDigimonSlidesSetas(Digi);


    FocarSlides(Digi);
    for (let i = 0; i < Digi_Evolucoes.length; i++) {
        FocarSlides(Digi_Evolucoes[i]);
    }

    //Slides





}

function FocarSlides(Digi) {
    let Slide_evos = Digi.getSlideEvolucoesIntern();

    for (let i = 0; i < Slide_evos.length; i++) {
        let nome_formatado = "digimon_" + formatar_nome(Slide_evos[i].getNome());
        const elemento = document.querySelector(`#${nome_formatado}`);
        elemento.style.opacity = "1";
        elemento.style.border = "1px solid red"

        /*
        let Slide_evos_Evos = Slide_evos[i].getLaterEvolucoes();
        for (let i = 0; i < Slide_evos_Evos.length; i++) {
            let nome_formatado = "digimon_" + formatar_nome(Slide_evos_Evos[i].getNome());
            const elemento = document.querySelector(`#${nome_formatado}`);
            elemento.style.opacity = "0.4";
            elemento.style.border = "1px solid red"
        }
        FocarDigimonEvosSetas(Slide_evos[i], true);
        */
    }
}

function FocarDigimonEvosSetas(Digi, slide = false) {
    const evolucoes = Digi.getEvolucoesIntern();
    if (evolucoes.length === 0) {
    } else {
        for (let i = 0; i < evolucoes.length; i++) {
            let nome = `#seta_digimon_${Digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}_para_${evolucoes[i].getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}`
            const seta_elemento = document.querySelector(nome);
            if (slide == true) {
                /*
                seta_elemento.style.opacity = "1";
                FocarDigimonEvosSetas(evolucoes[i], true);
                */
            } else {
                seta_elemento.style.opacity = "1";
                FocarDigimonEvosSetas(evolucoes[i]);
            }
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

function FocarDigimonSlidesSetas(Digi) {
    const slide = Digi.getSlideEvolucoesIntern();
    if (slide.length === 0) {
    } else {
        for (let i = 0; i < slide.length; i++) {
            let nome = `#seta_digimon_${Digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}_para_${slide[i].getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}`
            const seta_elemento = document.querySelector(nome);
            if (seta_elemento != null) {
                seta_elemento.style.opacity = "1";
            } else {
                let nome_reverso = `#seta_digimon_${slide[i].getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}_para_${Digi.getNome().toLowerCase().replace(/\s/g, "_").replace(/[\(\)]/g, "")}`
                const seta_elemento_r = document.querySelector(nome_reverso)
                seta_elemento_r.style.opacity = "1";
            }
        }
    }
    const evos = Digi.getEvolucoesIntern()
    for (let i = 0; i < evos.length; i++) {
        FocarDigimonSlidesSetas(evos[i]);
    }
}

function Desfocar() {
    document.addEventListener("click", (evento) => {

        // ignora clique no botão
        if (evento.target.closest(".close_button")) {
            return;
        }

        if (evento.target.closest(".Insert_Template")) {
            return;
        }

        /*
        if (evento.target.closest(".Delete_Digimon_Button")) {
            return;
        }
        */

        const clicouDentro = evento.target.closest(".digimon_template");

        if (!clicouDentro) {
            const digimons = document.querySelectorAll(".digimon_template");

            digimons.forEach(digimon => {
                digimon.style.opacity = "1";
                digimon.style.border = "1px solid #ccc";
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