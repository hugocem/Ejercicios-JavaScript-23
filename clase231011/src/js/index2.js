// Ejemplo funcion Multiplicar

/* let multiplicar = (num1, num2) => {
  return num1 * num2;
};

let resultado = multiplicar(2, 3);
console.log("Resultado de la multiplicación = " + resultado); */

// array de datos numéricos
/* const datosNumericos = [5, 7, 9, 15, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38];

const cuadrados = datosNumericos.map((dato) => {
  return dato * dato;
});

console.log("Resultado de cuadrados = " + cuadrados); */

// Función Lambda utilizando el método map para multiplicar datos

/* const N = 15;
const multiplicarPorN = datosNumericos.map((numero) => {
  return N * numero;
});

console.log("Resultado por N = " + multiplicarPorN);
 */
// En Button guardo la expresión

/* const button = document.querySelector("button");

//le agrego a buttonun evento

button.addEventListener("click", () => {
  console.log("El boton ha sido clickeado");
});
 */
// Función lambda sin parámetros de Entrada
// deben incluirse paréntesis vacíos
/* const ejemploSinParametros = () => {
  return "Función que no recibe parámetros de entrada";
};

console.log(ejemploSinParametros()); */

//Ejemplo de funcíon lambda on una sola expresión
/* const ejemploUnaExpresion = (dato1, dato2) => dato1 + dato2;

console.log(ejemploUnaExpresion(5, 3));
 */
//Ejemplo 2 de función lambda con una sola expresión

/* const comunicado = "Alumnos de Argentina Programa es hora de escribir código";
const mostrarMensaje = (mensaje) => alert(mensaje);
mostrarMensaje(comunicado);

const persona = {
  name: "Messi",
  saludar() {
    console.log(`Hola, ni nombre es ${this.name}`);
  },
  startTimer() {
    setInterval(() => {
      this.saludar();
    }, 1000);
  },
};
persona.startTimer(); */

// Leer datos hasta que se llegue a 1000 elementos o que el dato ingresado sea igual a
// -50.
// Calcular e imprimir:
// a) La cantidad de elementos ingresados
// b) El porcentaje de los elementos pares.
// c) El promedio de todos los datos ingresados, excluyendo (si se ingresa) el -50.
// Nota: Recordar que el operador mod (%) se usa para obtener el resto de la división
// entera.

const leerDato = (cont) => {
  const dato = parseInt(prompt("Ingrese dato: " + (cont + 1)));
  return dato;
};

// función de contar números pares
const contarPares = (dato, contPar) => {
  if (dato % 2 == 0) {
    contPar++;
  }
  return contPar;
};

// Función Calcular Porcentaje

const calcularPorcentaje = (cont, contPar) => {
  return (contPar / cont) * 100;
};

// Función Calcular Promedio

const calcularPromedio = (suma, cont) => {
  return suma / cont;
};

const App = () => {
  var datos = [];
  let cont = 0;
  let N = parseInt(prompt("Ingrese cantidad de datos"));
  let contPar = 0;
  let suma = 0;
  let contPromedio = 0;
  let porcentajePar = 0;
  let promedio = 0;
  datos[cont] = leerDato(cont);
  while (cont < N && datos[cont] !== -50) {
    cont++;
    datos[cont] = leerDato(cont);
  }

  for (let i = 0; i < datos.length; i++) {
    contPar = contarPares(datos[i], contPar);
    if (datos[i] !== -50) {
      contPromedio++;
      suma += datos[i];
    }
  }
  porcentajePar = calcularPorcentaje(datos.length, contPar);
  promedio = calcularPromedio(suma, contPromedio);
  console.log(
    `a) Cantidad de elemento Ingresados ${datos.length}
      b) Porcentaje de los elementos pares ${porcentajePar}
      c) Promedio de todos los datos ingresados ${promedio}
      `
  );
};
App();
