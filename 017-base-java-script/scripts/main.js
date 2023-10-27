
// const meuCabecalho = document.querySelector('h1');
// meuCabecalho.textContent = 'Ola mundo!';

/*

    Observe que:

        document.querySelector('html').onclick = function() {
            alert('Ai! Pare de me cutucar!');
        };

    é equivalente a

        let meuHTML = document.querySelector('html');
        meuHTML.onclick = function() {
            alert('Ai! Pare de me cutucar!');
        };

    É só uma maneira mais curta de escrever.

*/

let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/hamburger-batata.jpg') {
      minhaImagem.setAttribute ('src','imagens/hamburger-bacon.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/hamburger-batata.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
    }
}

if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { 
    defineNomeUsuario();
}

