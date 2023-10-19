import Saludo from "./componentes/Saludo";
import BotonContador from "./componentes/BotonContador";
import EstiloComponente from "./componentes/Estilo";
import Mensaje from "./componentes/Mensaje";
import ListaNumeros from "./componentes/ListaNumeros.js";

function App() {
  const listanumeros = [1, 2, 3, 4, 5, 6];
  return (
    <div className="App">
      <header className="App-header">
        <Saludo nombre="JavaScript" />
        <Saludo nombre="Java" />
      </header>
      <BotonContador />
      <EstiloComponente />
      <Mensaje mostrar={true} texto="Este es un mensaje visible" />
      <Mensaje mostrar={false} texto="gehaslkAHHSDAHSA" />
      <h1>Lista de números</h1>
      <ListaNumeros numeros={listanumeros} />
    </div>
  );
}

export default App;
