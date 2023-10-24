import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        //fetch('./src/products.json')
        fetch("http://localhost:3000/productos")
        .then((response)=>response.json())
        .then((data)=>setProductos(data));
        
    },[]);

  return (
    <div>
        <h1>Lista de productos</h1>
        <ul>
            {productos.map((productito)=>(
                <li key={productito.id}>
                    <Link to={`/productos/${productito.id} `}>{productito.nombre}</Link>
                    

                </li>
            )

            )

            }
        </ul>
    </div>
  )
}

export default Productos