var contador = 0;
function BotonContador() {
  const incrementarContador = () => {
    contador++;
    actualizarContadorEnPantalla();
  };

  const actualizarContadorEnPantalla = () => {
    const contadorElement = document.getElementById("contador");
    if (contadorElement) {
      contadorElement.textContent = contador;
    }
  };

  return (
    <div>
      <button onClick={incrementarContador}>Incrementar</button>
      <p>
        Contador: <span id="contador">0</span>
      </p>
    </div>
  );
}
export default BotonContador;
