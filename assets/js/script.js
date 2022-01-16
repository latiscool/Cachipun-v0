'use strict';

const resultadoSesion = document.getElementById('resultado-sesion');

// SELECCION DEL ROBOT
let robotSeleccion = () => {
  const robotOpcion = document.getElementById('robot');
  const listaOpciones = ['fa-fist-raised', 'fa-hand-paper', 'fa-hand-scissors'];
  const robotRandom = Math.floor(Math.random() * 3);
  robotOpcion.innerHTML = ` <i class="fas ${listaOpciones[robotRandom]} fa-10x" value=<"${listaOpciones[robotRandom]}"></i>`;
  return listaOpciones[robotRandom];
};

// SELECCION HUMANO
let seleccionHumano = (jugadaHumano) => {
  const humanOpcion = document.getElementById('humano');
  let vencedor;
  //IMPRIME EN  EL HTML EL FONTAWESOME SELECCIONADO POR HUMANO
  humanOpcion.innerHTML = ` <i class="fas ${jugadaHumano} fa-10x" value=<"${jugadaHumano}"></i>`;
  // ELIGIENDO EL GANADOR
  //TENIENDO LAS DOS SELECCIONES (ARGUMENTOS) SALTO A LINEA 39 - vencedorSesion
  robotSeleccion();
  vencedor = vencedorSesion(jugadaHumano, robotSeleccion());
  resultadoSesion.innerText = vencedor;
};

// CAPTURANDO EVENTO DE LA SELECCION HUMANO (ARGUMENTOS)
document.getElementById('fa-fist-raised').addEventListener('click', () => {
  seleccionHumano('fa-fist-raised');
});
document.getElementById('fa-hand-paper').addEventListener('click', () => {
  seleccionHumano('fa-hand-paper');
});
document.getElementById('fa-hand-scissors').addEventListener('click', () => {
  seleccionHumano('fa-hand-scissors');
});

//DETERMINANDO EL VENCEDOR DE LA SESION
let vencedorSesion = (jugadaHumano, robotSeleccion) => {
  let resultado = '';
  if (jugadaHumano === robotSeleccion) {
    resultado = 'Empate';
  } else if (
    (jugadaHumano === 'fa-hand-scissors' &&
      robotSeleccion === 'fa-hand-paper') ||
    (jugadaHumano === 'fa-hand-paper' && robotSeleccion === 'fa-fist-raised') ||
    (jugadaHumano === 'fa-fist-raised' && robotSeleccion === 'fa-hand-scissors')
  ) {
    resultado = `Humano Gana`;
  } else {
    resultado = `Robot Gana  `;
  }
  return resultado;
};
