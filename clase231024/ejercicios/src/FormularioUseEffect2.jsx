import {useState, useEffect} from 'react'

const FormularioUseEffect2 = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [errores, setErrores] = useState({});
    // Usamos useEffect para validar el campo "nombre" en tiempo real.
  useEffect(() => {
    if (nombre.length < 3) {
      setErrores({ ...errores, nombre: 'El nombre debe tener al menos 3 caracteres.' });
    } else {
      setErrores({ ...errores, nombre: '' });
    }
  }, [nombre.length]);
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    };

    
  return (
     <form>
        <div>
        <label>Nombre: </label>
            <input 
                type="text"
                value={nombre} 
                onChange={(e)=>setNombre(e.target.value)} />
            <span style={{color:"red"}}>{errores.nombre}</span>
        </div>
        <div>
        <label>Email: </label>
            <input 
                type="email"
                value={email} 
                onChange={handleEmailChange} />
            
        </div>
     </form>
  )
}

export default FormularioUseEffect2