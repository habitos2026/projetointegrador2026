// ===== DARK MODE — roda ANTES de tudo =====
if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
}

// ===== MENU =====
fetch("menu.html")
.then(res => res.text())
.then(data => {

    document.getElementById("menu").innerHTML = data;

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

// ===== RESTO DAS FUNÇÕES =====

function calc() {
    const checks = document.querySelectorAll('.habit-item input');
    let marcados = 0;

    checks.forEach(check => {
        if(check.checked) marcados++;
    });

    let porcentagem = (marcados / checks.length) * 100;

    document.getElementById("pct").innerText = Math.round (porcentagem) + "%";
    document.getElementById("bar").style.width = porcentagem + "%";

    const msg = document.getElementById("msg");
    const imgGif = document.getElementById("imgGif");

    if (porcentagem === 100) {

    msg.innerText = "Parabéns! Você completou todos os hábitos 🎉";

    lancarConfetes();

} else {

    msg.innerText = "";
    imgGif.innerHTML = "";

}
}

const data = document.getElementById("data");
if (data) {
    data.addEventListener("click", () => {
        data.showPicker();
    });
}

function calcularAgua() {
    const peso = parseFloat(document.getElementById("peso").value);
    const idade = parseInt(document.getElementById("idade").value);

    if (isNaN(peso) || peso <= 0 || isNaN(idade) || idade <= 0) {
        document.getElementById("resultadoAgua").innerText = "Por favor, preencha peso e idade corretamente.";
        return;
    }

    let mlPorKg;

    if (idade <= 17) mlPorKg = 40;
    else if (idade <= 55) mlPorKg = 35;
    else if (idade <= 65) mlPorKg = 30;
    else mlPorKg = 25;

    const totalMl = peso * mlPorKg;
    const totalLitros = (totalMl / 1000).toFixed(1);

    document.getElementById("resultadoAgua").innerText =
        `Você deve beber aproximadamente ${totalLitros}L de água por dia.`;
}

function lancarConfetes() {

    // Evita lançar várias vezes
    if (document.getElementById("confetes")) return;

    const canvas = document.createElement("canvas");
    canvas.id = "confetes";

    // Cobre a tela toda
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Cores dos confetes
    const cores = [
        "#f59e0b", "#38bdf8", "#34d399",
        "#f472b6", "#a78bfa", "#fb923c"
    ];

    // Cria 150 confetes
    const confetes = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        w: Math.random() * 100 + 100,
        h: Math.random() * 500 + 300,
        cor: cores[Math.floor(Math.random() * cores.length)],
        velocidade: Math.random() * 400 + 200,
        angulo: Math.random() * 3600,
        rotacao: Math.random() * 6 - 3,
        oscilacao: Math.random() * 2 - 1
    }));

    let frame;
    let tempo = 0;

    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tempo++;

        confetes.forEach(c => {
            c.y += c.velocidade;
            c.x += c.oscilacao;
            c.angulo += c.rotacao;

            ctx.save();
            ctx.translate(c.x, c.y);
            ctx.rotate((c.angulo * Math.PI) / 180);
            ctx.fillStyle = c.cor;
            ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
            ctx.restore();
        });

        // Para após 4 segundos
        if (tempo < 240) {
            frame = requestAnimationFrame(animar);
        } else {
            cancelAnimationFrame(frame);
            canvas.remove();
        }
    }

    animar();
}