const ListaNumeros = ({ numeros }) => {
  return (
    <ul>
      {numeros.map((numero, index) => (
        <li key={index}>{numero}</li>
      ))}
    </ul>
  );
};

export default ListaNumeros;
