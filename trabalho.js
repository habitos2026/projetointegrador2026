//capturar o botão de menu
const botaoMenu = document.querySelector(".botaoMenu");

//capturar o grupo de navegação
const menu = document.querySelector("header nav");

//se encontrou o botão de menu
if(botaoMenu){

    botaoMenu.addEventListener("click", abrirMenu);
}

//função de abrir menu
function abrirMenu(){

    menu.style.right = "0";
}

//capturar o botao de fechar menu
const botaoFecharMenu = document.querySelector("#botaoFecharMenu");

//se o botao de fechar menu foi encontrado
if(botaoFecharMenu){

    botaoFecharMenu.addEventListener("click", fecharMenu);
}

//função de fechar o menu
function fecharMenu(){

    menu.style.right = "-100%";
}

function calc() {

    // pega todos os checkbox
    const checks = document.querySelectorAll('.habit-item input');

    // quantidade marcada
    let marcados = 0;

    checks.forEach(check => {
        if(check.checked){
            marcados++;
        }
    });

    // calcula porcentagem
    let porcentagem = (marcados / checks.length) * 100;

    // atualiza texto
    document.getElementById("pct").innerText = porcentagem + "%";

    // atualiza barra
    document.getElementById("bar").style.width = porcentagem + "%";

    // mensagem
    const msg = document.getElementById("msg");

    if(porcentagem == 100){
        msg.innerText = "ParabÃ©ns! VocÃª completou todos os hÃ¡bitos ðŸŽ‰";
    }else{
        msg.innerText = "";
    }
}
