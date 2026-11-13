import { mudarIdioma, traduzirPagina } from './idioma.js';

// ===== RECUPERA O IDIOMA SALVO AO CARREGAR A PÁGINA =====
const idiomaSalvo = localStorage.getItem('idiomaSite');
if (idiomaSalvo && idiomaSalvo !== document.documentElement.lang) {
    // Se o idioma salvo for diferente do atual (que começa como pt-BR), chama a função para traduzir
    traduzirPagina(idiomaSalvo);
}
// variaves globais

// ===== DARK MODE=====

/*Verifica se o tema salvo é "dark" e aplica a classe imediatamente ao carregar o script*/
if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

// ===== MENU =====

/*busca o arquivo html do menu, o conteúdo dentro dele só é executado após o menu carregar*/
fetch("menu.html")
.then(res => res.text())
.then(data => {

   document.getElementById("menu").innerHTML = data;

    // ===== PÁGINA ATUAL =====
    let paginaAtual = window.location.pathname.split("/").pop();

    if (paginaAtual === "") {
        paginaAtual = "index.html";
    }

    const linksMenu = document.querySelectorAll("#menu a");

    linksMenu.forEach(link => { /* Percorre cada tag <a> (link) encontrada dentro do menu */
        if (link.getAttribute("href") === paginaAtual) {
            link.classList.add("ativo"); /*adiciona uma classe "ativo" para mudar a cor do menu via css*/
        }
    });

    // ===== BOTÃO IDIOMA =====
    const botaoLang = document.getElementById('btn-lang');
    if (botaoLang) {
        // Ajusta o texto do botão de acordo com o idioma atual da página
        
        if (document.documentElement.lang === 'en') {
            botaoLang.innerText = 'Português';
        } else {
            botaoLang.innerText = 'English';
        }
        botaoLang.addEventListener('click', () => {
            mudarIdioma();
        });
    }

    // Botão tema
    const btnTema = document.getElementById("btnTema");
    btnTema.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const temaDark = document.body.classList.contains("dark");
        localStorage.setItem("tema", temaDark ? "dark" : "light");
        btnTema.textContent = temaDark ? "☀️" : "🌙";
    });

    // Botões do menu mobile
    const abrir = document.querySelector(".botaoMenu");
    const fechar = document.querySelector("#botaoFecharMenu");
    const menu = document.querySelector("#menuNav");

    abrir.addEventListener("click", () => {
        menu.style.right = "0";
    });

    fechar.addEventListener("click", () => {
        menu.style.right = "-100%";
    });

});



