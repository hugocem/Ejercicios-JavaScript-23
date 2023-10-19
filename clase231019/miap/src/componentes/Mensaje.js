function Mensaje({ mostrar, texto }) {
  return <div>{mostrar ? <p>{texto}</p> : <p>El mensaje esta Oculto</p>}</div>;
}

export default Mensaje;
