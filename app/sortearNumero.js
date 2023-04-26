const menorValor = 1
const maiorValor = 1000
const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor

const numeroSecreto = geraNumeroSecreto()

function geraNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto);
