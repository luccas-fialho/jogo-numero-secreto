const elementoChute = document.querySelector('#chute')
let tentativas = 1;

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => {
    recognition.start()
    tentativas += 1
})
