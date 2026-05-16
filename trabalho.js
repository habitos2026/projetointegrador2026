fetch("menu.html")
.then(res => res.text())
.then(data => {

    document.getElementById("menu").innerHTML = data;

    const botaoMenu = document.querySelector(".botaoMenu");

    const menu = document.querySelector("nav");

    const botaoFecharMenu = document.querySelector("#botaoFecharMenu");

    // ABRIR MENU
    botaoMenu.addEventListener("click", () => {

        menu.style.right = "0";

    });

    // FECHAR MENU
    botaoFecharMenu.addEventListener("click", () => {

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

    if(porcentagem == 100){
        msg.innerText = "ParabÃ©ns! VocÃª completou todos os hÃ¡bitos ðŸŽ‰";
    }else{
        msg.innerText = "";
    }
}
