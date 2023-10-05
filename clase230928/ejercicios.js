// MAP
/*const numerosString = ["20", "77", "2000"];
console.log(numerosString);
const numerosEnteros = numerosString.map((numero) => {
  return parseInt(numero);
});
console.log(numerosEnteros);*/

/*let superheroes = ["super", "spider", "iron"];
//let sufijo = "woman";

//let nombres = superheroes.map((item) => item + "woman");
let nombres = superheroes.map(function (item, indice) {
  return indice == 2 ? item + "woman" : item + "man";
});
console.log(nombres);*/

/*let numerosd = [3.7, 4.5, 6, 2.5];

let redondeados = numerosd.map(function (numero) {
  return Math.round(numero);
});

console.log(redondeados);*/

const users = [
  { id: 1, nombre: "Juan", edad: 18 },
  { id: 2, nombre: "Pedro", edad: 10 },
  { id: 3, nombre: "Steve", edad: 80 },
];

//const mayores = users.filter((item) => item.edad > 17);

//const busquedaid = users.find((item) => item.id === 2);

const existe = users.some((item) => item.id === 200);

console.log(existe);
