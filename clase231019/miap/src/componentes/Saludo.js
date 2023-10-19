import React from "react";

const Saludo = (props) => {
  const { nombre } = props;
  return (
    <div>
      <h1>Hola {nombre} !</h1>
    </div>
  );
};

export default Saludo;
