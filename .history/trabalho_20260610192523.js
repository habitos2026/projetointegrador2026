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
const imgGif = document.getElementById("imgGif");

if (porcentagem === 100) {

    msg.innerText = "Parabéns! Você completou todos os hábitos 🎉";

    imgGif.innerHTML = `
        <img src="pasta-de-imagens/gifParabens.gif" alt="Parabéns">
    `;

} else {

    msg.innerText = "";
    imgGif.innerHTML = "";

}

}

const data = document.getElementById("data");

data.addEventListener("click", () => {
    data.showPicker();
});

function calcularAgua() {
    const peso = parseFloat(document.getElementById("peso").value);
    const idade = parseInt(document.getElementById("idade").value);

    // Validação
    if (isNaN(peso) || peso <= 0 || isNaN(idade) || idade <= 0) {
        document.getElementById("resultadoAgua").innerText = "Por favor, preencha peso e idade corretamente.";
        return;
    }

    // Regra por faixa etária
    let mlPorKg;

    if (idade <= 17) {
        mlPorKg = 40;
    } else if (idade <= 55) {
        mlPorKg = 35;
    } else if (idade <= 65) {
        mlPorKg = 30;
    } else {
        mlPorKg = 25;
    }

    const totalMl = peso * mlPorKg;
    const totalLitros = (totalMl / 1000).toFixed(1); // ex: 2.5

    document.getElementById("resultadoAgua").innerText = 
        `Você deve beber aproximadamente ${totalLitros}L de água por dia.`;
}
