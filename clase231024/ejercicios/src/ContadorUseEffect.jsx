import { useState, useEffect } from "react";

const ContadorUseEffect = () => {
    const [conteo, setConteo] = useState(0);
    const incrementarConteo = ()=>{
        setConteo(conteo+1);
    }
    useEffect(()=>{
        let numero = conteo;
        if(numero ===3){
            alert("Llego a 3");
            setConteo(0);
        }
    },[conteo]);

  return (
    <div>
        <p>Conteo : {conteo}</p>
        <button onClick={incrementarConteo}>Incrementar</button>
    </div>
  )
}

export default ContadorUseEffect