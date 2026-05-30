fetch("menu.html")
.then(res => res.text())
.then(data => {

    document.getElementById("menu").innerHTML = data;

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
const gif = document.getElementById("gif"); 
const imgGif = document.createElement('img');

if(porcentagem === 100){ 
    msg.innerText = "Parabéns! Você completou todos os hábitos 🎉"; 
    imgGif.src = 'pasta-de-imagens/gifParabens.gif';
    imgGif.alt = 'Comemoração';
    imgGif.style.width = '100px';
    imgGif.style.marginLeft = '10px';
} else { 
    msg.innerText = ""; 
    container.insertAdjacentElement('afterend', imgGif);
}
}
