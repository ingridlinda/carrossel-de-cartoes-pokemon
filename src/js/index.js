/*

OBJETIVO 1 - QUANDO O USUARIO CLICAR NA SETA AVANÇAR, IR PARA PROXIMA CARTA...

    passo 1 - pegar o elemento HTML da seta avançar

    passo 2 - dar um jeito de indentificar quando o usuario clicar nele

    passo 3 - mudar para proxima carta da lista 

    passo 4 - esconder a carta que estava seleionada


OBJETIVO 2 - QUANDO O USUARIO CLICAR NA SETA VOLTAR, IR PARA A CARTA ANTERIOR...

    passo 1 - pegar o elemento HTML da seta voltar

    passo 2 - dar um jeito de indentificar quando o usuario clicar nele

    passo 3 - mudar para  carta anterior da lista 

    passo 4 - esconder a carta que estava selecionada

*/

// passo 1 - pegar o elemento HTML da seta avançar

const btnAvancar = document.getElementById("seta-avancar");
const btnVoltar = document.getElementById("seta-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function escoenderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartaoSelecionado() {
  cartoes[cartaoAtual].classList.add("selecionado");
}



btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    return;
  }

  escoenderCartaoSelecionado();

  cartaoAtual++;
  
  mostrarCartaoSelecionado();

});



btnVoltar.addEventListener("click", function () {
  if (cartaoAtual <= 0) {
    return;
  }

  escoenderCartaoSelecionado();

  cartaoAtual--;

  mostrarCartaoSelecionado();

});
