fetch("menu.html")
.then(res => res.text())
.then(data => {

    document.getElementById("menu").innerHTML = data;

    const abrir = document.getElementById("abrirMenu");
    const fechar = document.getElementById("fecharMenu");
    const menu = document.getElementById("menuNav");

    abrir.addEventListener("click", () => {
        menu.style.right = "0";
    });

    fechar.addEventListener("click", () => {
        menu.style.right = "-100%";
    });

});
