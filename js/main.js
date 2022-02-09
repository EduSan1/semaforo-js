"use strict";

const semaforo = document.getElementById("semaforo");
const verde = document.getElementById("verde");
const amarelo = document.getElementById("amarelo");
const vermelho = document.getElementById("vermelho");
const desligado = document.getElementById("desligado");
const automatico = document.getElementById("automatico");
let idAutomatico = null;
let idIntervalo = null;
let botoes = 1;

const quebro = () => {
  semaforo.src = "../img/quebrado.jpg";
  botoes = 2;
  automatico.textContent = "Automático";
  clearInterval(idIntervalo);
};

const ligarVerde = () => {
  if (botoes != 2) {
    semaforo.src = "../img/verde.png";
    botoes = 1;
    automatico.textContent = "Automático";
    clearInterval(idIntervalo);
  }
};
const ligarAmarelo = () => {
  if (botoes != 2) {
    semaforo.src = "../img/amarelo.png";
    botoes = 1;
    automatico.textContent = "Automático";
    clearInterval(idIntervalo);
  }
};
const ligarVermelho = () => {
  if (botoes != 2) {
    semaforo.src = "../img/vermelho.png";
    botoes = 1;
    automatico.textContent = "Automático";
    clearInterval(idIntervalo);
  }
};
const desligar = () => {
  if (botoes != 2) {
    semaforo.src = "../img/desligado.png";
    botoes = 1;
    automatico.textContent = "Automático";
    clearInterval(idIntervalo);
  }
};
const automatizacao = () => {
  if (idAutomatico == null) {
    semaforo.src = "../img/verde.png";
    idAutomatico = "amareloVd";
  } else if (idAutomatico == "amareloVd") {
    semaforo.src = "../img/amarelo.png";
    idAutomatico = "vermelho";
  } else if (idAutomatico == "vermelho") {
    semaforo.src = "../img/vermelho.png";
    idAutomatico = "amareloVm";
  } else if (idAutomatico == "amareloVm") {
    semaforo.src = "../img/amarelo.png";
    idAutomatico = "verde";
  } else if (idAutomatico == "verde") {
    semaforo.src = "../img/verde.png";
    idAutomatico = "amareloVd";
  }
  botoes = 0;
};
const botaoAutomatico = () => {
  if (botoes != 2) {
    if (botoes == 1) {
      idIntervalo = setInterval(automatizacao, 300);
      automatico.textContent = "Parar";
    } else {
      clearInterval(idIntervalo);
      automatico.textContent = "Automático";
      botoes = 1;
    }
  }
};

semaforo.addEventListener("dblclick", quebro);
verde.addEventListener("click", ligarVerde);
amarelo.addEventListener("click", ligarAmarelo);
vermelho.addEventListener("click", ligarVermelho);
desligado.addEventListener("click", desligar);
automatico.addEventListener("click", botaoAutomatico);
