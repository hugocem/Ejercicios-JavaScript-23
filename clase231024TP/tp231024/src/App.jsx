import { Link, Routes, Route } from 'react-router-dom'
import Productos from './Productos'
import DetalleProducto from './DetalleProducto'

function App() {
  
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/productos">Productos Mios</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:id" element={<DetalleProducto />} />
    </Routes>
      
    </>
  )
}

export default App
