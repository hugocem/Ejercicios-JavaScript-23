import { useState } from "react"

const Formulario = () => {
    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");

    const handleNombreChange = (e)=>{
        setNombre(e.target.value)
    };
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Nombre : "+ nombre);
        console.log("Email:" + email);
        limpiar();

    }

    const limpiar = ()=>{
        setNombre("");
        setEmail("");
    }

  return (
   
    <form onSubmit={handleSubmit} >
        <label htmlFor="nombre">Nombre: </label>
        <input 
            type="text" 
            id="nombre" 
            value={nombre} 
            onChange={handleNombreChange} />
        <label htmlFor="email">Email: </label>
        <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} />
        <button type="submit">Enviar</button>

    </form>
  )
}

export default Formulario