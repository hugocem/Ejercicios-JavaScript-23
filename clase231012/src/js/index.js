// Ejemplo 1 y 2 Workers
const w = new Worker("./src/js/worker.js");
w.postMessage("Hola Worker!");
w.onmessage = function (event) {
  console.log("Mensaje recibido del worker", event.data);
};

//Ejemplo 3 Workers
/*const worker = new Worker("./src/js/worker.js");

worker.postMessage({ start: 1, end: 100 });

worker.onmessage = function (e) {
  console.log("Pares: " + e.data.join(", "));
  worker.terminate();
};*/

//Ejemplo 4 Async

async function ejecutarTareas(tareas) {
  const resultados = [];
  //Ejecutar cada tarea en paralelo
  await Promise.all(
    tareas.map(async (tarea) => {
      const resultado = await tarea();
      resultados.push(resultado);
    })
  );
  return resultados;
}

function tarea1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tarea 1 Completada");
    }, 2000);
  });
}
function tarea2() {
  return new Promise((x) => {
    setTimeout(() => {
      x("Tarea 2 Completada");
    }, 3000);
  });
}
function tarea3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Tarea 3 Completada");
    }, 1000);
  });
}

// ejecutar las Tareas
const tareas = [tarea1, tarea2, tarea3];

ejecutarTareas(tareas).then((resultados) => {
  console.log(resultados);
});

//Ejemplo 5 Async

async function descargarImagenes(urls) {
  const promesasImagenes = urls.map(async (url) => {
    const respuesta = await fetch(url);

    const blobImagen = await respuesta.blob();
    const myFile = new File([blobImagen], "d:/image.jpeg", {
      type: blobImagen.type,
    });

    return blobImagen;
  });
  const imagenes = await Promise.all(promesasImagenes);
  return imagenes;
}

//urls de ejemplo

const urls = [
  "https://upload.wikimedia.org/wikipedia/commons/3/32/Pauscal_lenguaje_de_programaci%C3%B3n.png",
  "https://www.seobility.net/es/wiki/images/7/7f/Lenguaje_de_marcado.png",
];

// Descargar imágenes
descargarImagenes(urls).then((imagenes) => {
  console.log(`Se descargaron ${imagenes.length} imágenes. `);
});
