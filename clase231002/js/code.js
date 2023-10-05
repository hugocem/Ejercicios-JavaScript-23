const buttonsOperations = document.querySelectorAll(".botonOperacion");
const inputsElements = document.querySelectorAll("input");
const display = document.querySelector("#resultado");
const displayEstilo = document.querySelector("#display");
const temasElement = document.querySelectorAll(".tema");

const operacionesMatematicas = (primerValor, operacion, SegundoValor) => {
  const resultado = eval(primerValor + operacion + SegundoValor);
  console.log("resultado" + resultado);
  return resultado;
};

buttonsOperations.forEach((buttonOperation) => {
  buttonOperation.addEventListener("click", () => {
    try {
      const result = operacionesMatematicas(
        inputsElements[0].value,
        buttonOperation.value,
        inputsElements[1].value
      );

      display.innerText = result;
    } catch (error) {
      alert("Ingrese valores correctamente");
      console.log(error);
    }
  });
});

temasElement.forEach((temaElement) => {
  temaElement.addEventListener("click", () => {
    cambiarTema(temaElement.id, displayEstilo);
  });
});

const cambiarTema = (tema, pantalla) => {
  console.log("displayEstilo" + tema);
  pantalla.className = "displayEstilo" + tema;
};
