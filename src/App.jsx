import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [estado, setEstado] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/db/usuarios')
        setEstado(response.data)
      } catch (error) {
        console.error('Error al obtener datos:', error)
      }
    }

    fetchData()
  }, []) // Se ejecuta solo una vez al montar el componente

  return (
    <>
      app electron{estado.map((usuario)=>(
        <h5 key={usuario.id_usuario}>{usuario.nombre_usuario}</h5>
      ))}
    </>
  )
}

export default App
