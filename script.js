let numeroAleatorio;
let tentativas;

function iniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    tentativas = 10;
    alert('Novo jogo iniciado!');

    // Limpar campo de entrada
    document.getElementById('numeroUsuario').value = '';
}

function jogar() {
    let numeroUsuario = document.getElementById('numeroUsuario').value;

    if (numeroUsuario == numeroAleatorio) {
        alert('Parabéns, você acertou o número!');
        iniciarJogo(); // Reiniciar o jogo
    } else if (numeroUsuario < numeroAleatorio) {
        tentativas--;
        alert('O número é maior! Tentativas restantes ' + tentativas);
    } else if (numeroUsuario > numeroAleatorio) {
        tentativas--;
        alert('O número é menor! Tentativas restantes ' + tentativas);
    }

    if (tentativas == 0) {
        alert('Você perdeu! O número era ' + numeroAleatorio);
        iniciarJogo(); // Reiniciar o jogo

}

function recomecar() {
    iniciarJogo(); // Reiniciar o jogo
}
}
if (numeroUsuario != numeroAleatorio) {
    document.querySelector('.container').classList.add('vibrar');
}

// Iniciar o jogo quando a página carregar
window.onload = iniciarJogo;
document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    jogar();
});

if (numeroUsuario != numeroAleatorio) {
    document.querySelector('.container').classList.add('vibrar');
}

document.querySelector('.container').addEventListener('animationend', function() {
    this.classList.remove('vibrar');
});

var confettiSettings = { target: 'meuCanvas' };
var confetti = new ConfettiGenerator(confettiSettings);

if (numeroUsuario == numeroAleatorio) {
    confetti.render();
}

if (numeroUsuario == numeroAleatorio) {
    confetti.render();
    setTimeout(function() {
        confetti.clear();
    }, 5000);  // Parar o confete após 5 segundos
}