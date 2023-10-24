import { useState } from "react";
function Contador(){
    const [cuenta, setCuenta] = useState(0);
    const incrementarCuenta = ()=>{
        setCuenta(cuenta+1);
    };
    return(
        <div>
            <h1>Contador: {cuenta}</h1>
            <button onClick={incrementarCuenta}>Incrementar</button>
        </div>
    );

}
export default Contador;