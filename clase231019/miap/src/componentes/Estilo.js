function EstiloComponente() {
  const estiloEnLinea = {
    backgroundColor: "lightblue",
    padding: "10px",
    border: "1px solid #333",
  };
  return (
    <div>
      <h2>Estilos de Componentes</h2>
      <div style={estiloEnLinea}>Estilo de linea 1 con Style</div>

      <div className="estilo-con-clase">Estilo de linea 2 con clases CSS</div>
    </div>
  );
}
export default EstiloComponente;
