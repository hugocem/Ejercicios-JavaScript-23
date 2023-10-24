import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
const DetalleProducto = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState({});
    useEffect(()=>{
        fetch("http://localhost:3000/productos/")
        //fetch("http://localhost:3000/productos/"+id)
        .then((response)=>response.json())
        .then((data)=>{
            console.log("detalle producto ---Nombre--"+data.nombre);
            const productoEncontrado = data.find((p)=>p.id.toString()===id);
            setProducto(productoEncontrado);
            //setProducto(data);

        })
    },[id]);
  return (
    <div>
        <h1>Detalle del Producto</h1>
        <p>Id: {producto.id}</p>
        <p>Nombre: {producto.nombre}</p>
        <p>Precio: {producto.precio}</p>
        <p>Stock: {producto.stock}</p>
    </div>
    
  )
}

export default DetalleProducto