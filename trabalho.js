//capturar o botão de menu
const botaoMenu = document.querySelector(".botaoMenu");

//capturar o grupo de navegação
const menu = document.querySelector("header nav");

//se encontrou o botão de menu
if(botaoMenu){
    //atribuir uma sondagem para o clique no botão
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
    //voltar a propriedade right do css para 100%
    menu.style.right = "-100%";
}
