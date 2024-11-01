const socket = io();

const mensagens = document.getElementById('mensagens');
const chuteInput = document.getElementById('chute');
const palavraAtualizadaDiv = document.getElementById('palavra-secreta');
const quadrados = document.querySelectorAll('.quadrado');
const pontuacoes = document.getElementById('pontuacao');
const mensagensCliente = document.getElementById('mensagensCliente');

var contador = 0;                           

socket.on('mensagem', (data) => {
  console.log(data);
  console.log(data.mensagem);
  if(data.mensagem){
    mensagens.innerHTML = `<p>${data.mensagem}</p>`;
  }
  if (data.pontuacoes) {
    pontuacoes.innerHTML = '';
    for (let jogador in data.pontuacoes) {
      pontuacoes.innerHTML += `<p>Jogador ${jogador}: ${data.pontuacoes[jogador]}</p>`;
    }
  }
  if (data.letrasAdivinhadas) {
    mensagens.innerHTML += `<p>Letras adivinhadas: ${data.letrasAdivinhadas.join(', ')}</p>`;
  }
  if (data.palavraAtualizada) {
    atualizarpalavraAtualizada(data.palavraAtualizada);
  }
  if (data.erros) {
    contador = data.erros;
    console.log(contador)
    if (contador >= 6) {
      desabilitarChute();
    }
    atualizaErro();
  }
});

socket.on('vencedor', (data) => {
  mensagens.innerHTML += `<p>O jogador ${data.vencedor} venceu! A palavra era: ${data.palavraSecreta}</p>`;
  if (data.pontuacoes) {
    pontuacoes.innerHTML = '';
    for (let jogador in data.pontuacoes) {
      pontuacoes.innerHTML += `<p>Jogador ${jogador}: ${data.pontuacoes[jogador]}</p>`;
    }
  }
  if (data.palavraAtualizada) {
    atualizarpalavraAtualizada(data.palavraAtualizada);
  }
  desabilitarChute();
});

socket.on('resetar', (data) => {
  mensagens.innerHTML += `<p>${data.mensagem}</p>`;
  pontuacoes.innerHTML = `<p>Pontuação: ${data.pontuacoes}</p>`;
  contador = 0;
  habilitarChute();
  atualizarpalavraAtualizada(data.palavraAtualizada);
  atualizaErro();
});

socket.on('fim', (data) => {
  mensagens.innerHTML += `<p>${data.mensagem}</p>`;
  pontuacoes.innerHTML = `<p>Pontuação: ${data.pontuacoes}</p>`;
});

function enviarChute() {
  const letra = chuteInput.value;
  socket.emit('chutar', letra);
  chuteInput.value = '';
}

function reiniciarJogo() {
  socket.emit('resetar');
}

function atualizarpalavraAtualizada(palavraAtualizada) {
    palavraAtualizadaDiv.innerHTML = palavraAtualizada.split('').map(letra => letra === ' ' ? '&nbsp;' : letra).join(' ');
}

function atualizaErro(){
    for (let i = 0; i < contador; i++) {
        quadrados[i].style.backgroundColor = "red";
    }
    if (contador === 0) {
        for (let i = 0; i < quadrados.length; i++) {
            quadrados[i].style.backgroundColor = "grey";
        }
    }
}

function habilitarChute(){
  document.getElementById('chute').disabled = false;
  document.getElementById('enviar').disabled = false;
  document.getElementById('enviar').style.backgroundColor = "#333";
  document.getElementById('enviar').cursor = "pointer";
}

function desabilitarChute(){
  document.getElementById('chute').disabled = true;
  document.getElementById('enviar').disabled = true;
  document.getElementById('enviar').style.backgroundColor = "grey";
  document.getElementById('enviar').cursor = "not-allowed";
}

function habilitarReset(){
  document.getElementById('resetar').disabled = false;
  document.getElementById('resetar').style.backgroundColor = "#333";
  document.getElementById('resetar').cursor = "pointer";
}

function desabilitarReset(){
  document.getElementById('resetar').disabled = true;
  document.getElementById('resetar').style.backgroundColor = "grey";
  document.getElementById('resetar').cursor = "not-allowed";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
    enviarChute();
  }
});


