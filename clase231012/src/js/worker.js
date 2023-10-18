//Ejemplo 1 Workers
//Escucha mensajes del hilo principal
/* onmessage = function (event) {
  console.log("Mensaje recibido del hilo principal: ", event.data);

  //envía un mensaje de vuelta al hilo principal
  this.postMessage("Hola Hilo Principal!");
}; */

//Ejemplo 2 Workers
/*self.onmessage = function (e) {
  const mensajeDesdeElMain = e.data;
  console.log("Recibido un mensaje del hilo principal:", mensajeDesdeElMain);

  // Realiza algún procesamiento
  const resultado = mensajeDesdeElMain.toUpperCase();

  // Envía el resultado de vuelta al hilo principal
  self.postMessage(resultado);
};*/

//Ejemplo 3 Workers

self.onmessage = function (e) {
  const start = e.data.start;
  const end = e.data.end;

  const pares = par(start, end);

  self.postMessage(pares);
  self.close();
};

function par(start, end) {
  const resultado = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
      resultado.push(i);
    }
  }

  return resultado;
}
