//Funcion llamada desde el HTML con el boton
function juegocachipun() {
  var cantJuegos = parseInt(prompt('Ingrese la cantidad de partidas a jugar'));
  var contador = 0; //contador para realizar la cantidad de jugadas ingresadas por el prompt
  //Ciclo Repetitivo
  while (contador < cantJuegos) {
    var jugadaHumano = prompt(
      `Ingrese su jugada \n1. Piedra \n2. Papel \n3. Tijera`
    );

    switch (jugadaHumano) {
      case '1':
        jugadaHumano = 'Piedra';
        break;
      case '2':
        jugadaHumano = 'Papel';
        break;
      case '3':
        jugadaHumano = 'Tijera';
        break;
    }

    console.log(jugadaHumano); //Probando que la selección esta correcta

    ganador = defineGanador(jugadaHumano, jugadaMaquina());
    contador++;
    //mensajes de las jugadas
    switch (ganador) {
      case 'humano':
        document.write(`El Resultado: Felicidades humano, haz ganado! <Br>`);
        break;
      case 'maquina':
        document.write(`Humano, haz perdido! <Br>`);
        break;
      default:
        document.write(`El Resultado es un empate <Br>`);
    }
    //funcion Juagada de la Maquina se ve ramdomicamente
    //que elige la maquina

    function jugadaMaquina() {
      switch (Math.floor(Math.random() * 3)) {
        case 0:
          return 'Piedra';
          break;
        case 1:
          return 'Papel';
          break;
        case 2:
          return 'Tijera';
          break;
      }
    }
    //Funcion para definir el ganador se ven las opciones desde el Humano para ganar en caso contrario gana la maquina
    function defineGanador(humano, maquina) {
      let resultado = '';
      // humano y maquina son las variables que entran en defineGanador
      if (humano == maquina) {
        resultado = 'empate';
      } else if (
        (humano == 'Tijera' && maquina == 'Papel') ||
        (humano == 'Papel' && maquina == 'Piedra') ||
        (humano == 'Piedra' && maquina == 'Tijera')
      ) {
        resultado = 'humano';
      } else {
        resultado = 'maquina';
      }

      return resultado;
    }
  }
}
