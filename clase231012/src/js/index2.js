const miPromesa = new Promise((resolve, reject) => {
  const numeroAleatorio = Math.random();
  console.log("Numero aleatorio: " + numeroAleatorio);
  if (numeroAleatorio < 0.5) {
    resolve("Éxito");
  } else {
    reject("Error");
  }
});

miPromesa
  .then((resultadoExitoso) => {
    console.log("Promesa resuelta con éxito:", resultadoExitoso);
  })
  .catch((error) => {
    console.error("Promesa rechazada con error:", error);
  });

//-----------------Otro Ejemplo promesa--------------
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10); // Resuelve la promesa con el valor 10 después de un retraso
  }, 1000);
});

promesa
  .then((valor) => {
    console.log(`Paso 1: Valor inicial es ${valor}`);
    return valor * 2; // Devuelve un nuevo valor para la siguiente promesa
  })
  .then((valor) => {
    console.log(`Paso 2: El valor duplicado es ${valor}`);
    return valor + 5; // Devuelve otro nuevo valor
  })
  .then((valor) => {
    console.log(`Paso 3: El valor aumentado en 5 es ${valor}`);
    // Puedes devolver otra promesa aquí
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(valor * 3);
      }, 1000);
    });
  })
  .then((valor) => {
    console.log(`Paso 4: El valor triplicado es ${valor}`);
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });

//----------------------Async await
// Función simulada que retorna una promesa con un retraso
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true; // Simulando éxito
      if (exito) {
        resolve("Datos obtenidos con éxito");
      } else {
        reject("Error al obtener datos");
      }
    }, 2000); // Simulando una operación asincrónica que toma 2 segundos
  });
}

// Función asíncrona que utiliza async/await para obtener datos

async function obtenerYMostrarDatos() {
  try {
    console.log("Obteniendo datos...");
    const resultado = await obtenerDatos(); // Espera a que se resuelva la promesa
    console.log(resultado); // Imprime el resultado
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

// Llamamos a la función asíncrona
obtenerYMostrarDatos();

// ----------------------Async await-----------------

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function miFuncionAsync() {
  console.log("Comenzando...");
  await esperar(2000);
  console.log("Después de 2 segundos.");
}

miFuncionAsync();

// ---------------------Otro async await---------------------------------

function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = false; // Simulando éxito
      if (exito) {
        resolve("Datos obtenidos con éxito");
      } else {
        reject("Error al obtener datos");
      }
    }, 2000); // Simulando una operación asincrónica que toma 2 segundos
  });
}

// Función asíncrona que utiliza async/await para obtener datos
async function obtenerYMostrarDatos() {
  try {
    console.log("Obteniendo datos...");
    const resultado = await obtenerDatos(); // Espera a que se resuelva la promesa
    console.log(resultado); // Imprime el resultado
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

// Llamamos a la función asíncrona
obtenerYMostrarDatos();

// ------------------------------------------------------

function obtenerResultadoPromesa1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Resultado de la promesa 1"), 6000);
  });
}

function obtenerResultadoPromesa2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Resultado de la promesa 2"), 5000);
  });
}

//------------------Inicio –de Promesas --------------------------
async function ejecutarLasPromesas() {
  try {
    const promesa1 = await obtenerResultadoPromesa1(); // función que devuelve una promesa
    console.log("Resultado de la primera promesa:", promesa1);
    const promesa2 = await obtenerResultadoPromesa2(); // función que devuelve otra promesa
    console.log("Resultado de la segunda promesa:", promesa2);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}
ejecutarLasPromesas();

//------------------Fin ----------------------------

//------------------Inicio –de Promesas todas--------------------------

async function ejecutarTodasLasPromesas() {
  try {
    const promesa1 = obtenerResultadoPromesa1(); // función que devuelve una promesa
    const promesa2 = obtenerResultadoPromesa2(); // función que devuelve otra promesa

    // Espera a que todas las promesas se resuelvan usando Promise.all()
    const [resultado1, resultado2] = await Promise.all([promesa1, promesa2]);

    console.log("Resultado de la primera promesa:", resultado1);
    console.log("Resultado de la segunda promesa:", resultado2);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

// Llama a la función para ejecutar las promesas
ejecutarTodasLasPromesas();
//------------------Fin de Promesas Todas --------------------------

//------------------Fetch repaso--------

fetch("https://jsonplaceholder.typicode.com/posts/")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La respuesta de la red no fue exitosa");
    }
    return response.json(); // Analiza la respuesta como JSON
  })
  .then((data) => {
    console.log("Datos obtenidos con fetch:", data);
  })
  .catch((error) => {
    console.error("Ocurrió un error:", error);
  });

//---------------------Fetch con async----------

async function obtenerDatosDeJSONPlaceholder() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      console.log("La respuesta de la red no fue exitosa");
    }

    const data = await response.json();
    console.log("Datos obtenidos de JSONPlaceholder:", data);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

// Llamamos a la función asíncrona para obtener los datos
obtenerDatosDeJSONPlaceholder();
