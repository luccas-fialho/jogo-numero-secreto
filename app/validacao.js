function verificaChute(chute) {

    if(chute == 'game over') {
        document.body.innerHTML = `
            <h2>GAME OVER!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        return
    } 

    const numero = +chute //transdormando a string em inteiro

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if (numero > maiorValor || numero < menorValor) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML += `
            <h2>Você acertou!</h2>
            <h3>O número secreto era: ${numeroSecreto}</h3>
            <h3>Total de tentativas: ${tentativas}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
