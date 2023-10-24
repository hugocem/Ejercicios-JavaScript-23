import { useState } from 'react'
import Contador from './Contador'
import Formulario from './Formulario'
import ContadorUseEffect from './ContadorUseEffect'
import FormularioUseEffect2 from './FormularioUseEffect2'
import { Routes, Route, Outlet } from 'react-router-dom'
import PaginaInicio from './PaginaInicio'
import AcercaDe from './AcercaDe'
import Header from './Header'

function App() {
  const [count, setCount] = useState(10)
  
  return (
    <>
    <Header></Header>
    <Routes>
    <Route index element={<PaginaInicio/>} />
      <Route path="/acercade" element={<AcercaDe/>} />
    </Routes>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>

      <div>
        <h1>Contador realizado por nosotros</h1>
        <Contador></Contador>
      </div>

      <div>
        <h1>Formulario</h1>
        <Formulario />
      </div>

      <div>
        <h1>Contador con UseEffect</h1>
        <ContadorUseEffect />
      </div>

      <div>
        <h1>Formulario con UseEffect</h1>
        <FormularioUseEffect2 />
      </div>
      <Outlet />
    </>
  )
}

export default App
