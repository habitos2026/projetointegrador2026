export function mudarIdioma() {
    const elementos = document.querySelectorAll('[data-pt]');
    const botao = document.getElementById('btn-lang');
    const idioma = document.documentElement.lang ;
     console.log( `idoma na funcao : ${idioma}`)
    if (idioma === 'pt-BR') {
        elementos.forEach(el => {
            if (el.tagName === 'TITLE') {
                el.innerText = el.getAttribute('data-en');
            } else {
                el.innerText = el.getAttribute('data-en');
            }
        });
        document.documentElement.lang = 'en';
        localStorage.setItem('idiomaSite', 'en'); // Salva a preferência
        if (botao) botao.innerText = 'Português';
       
    } else {
        elementos.forEach(el => {
            el.innerText = el.getAttribute('data-pt');
        });
        document.documentElement.lang = 'pt-BR';
        localStorage.setItem('idiomaSite', 'pt-BR'); // Salva a preferência
        if (botao) botao.innerText = 'English';
       
    }
}

export function traduzirPagina(idioma) {
    const elementos = document.querySelectorAll('[data-pt]');
    const botao = document.getElementById('btn-lang');    
    console.log( ` funcao traducao : ${idioma}`) 
    if (idioma === 'pt-BR') {
        elementos.forEach(el => {
            el.innerText = el.getAttribute('data-pt');
        });
        document.documentElement.lang = 'pt-BR';
        if (botao) botao.innerText = 'English';

    } else {
        elementos.forEach(el => {
            if (el.tagName === 'TITLE') {
                el.innerText = el.getAttribute('data-en');
            } else {
                el.innerText = el.getAttribute('data-en');
            }
        });
        document.documentElement.lang = 'en';     
        if (botao) botao.innerText = 'Português';
       
    }
}