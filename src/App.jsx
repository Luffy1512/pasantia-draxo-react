import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Navegacion from './components/Navegacion'


function App() {

  const [mapa, setMapa] = useState(false)
  const [lista, setLista] = useState(false)
  const [acerca, setAcerca] = useState(false)
  const [casas, setCasas] = useState({})

  useEffect(() => {
    // console.log('Componente Listo...');
    setMapa(true)
    mostrarCasas();
  }, [])
  
  const url= 'https://modern-houses-api-production.herokuapp.com/api/v1/houses/California?city=San%20Francisco'
  async function consultarAPI() {
    try {
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      return resultado
    } catch (error) {
      console.log(error);
    }
  }

  async function mostrarCasas() {
    const respuesta = await consultarAPI()
    setCasas(respuesta)
  }

  return (
    <>
      <div className='bg-white md:shadow-md'>
        <Header 
          mapa={mapa}
          lista={lista}
          acerca={acerca}
        />
      </div>
      <div className='md:flex container mx-auto overflow-hidden'>
        <Navegacion
          mapa={mapa}
          setMapa={setMapa}
          lista={lista}
          setLista={setLista}
          acerca={acerca}
          setAcerca={setAcerca}
        />
        <Main 
          mapa={mapa}
          lista={lista}
          acerca={acerca}
          casas={casas}
          setMapa={setMapa}
          setLista={setLista}
          setAcerca={setAcerca}
        />
      </div>
    </>
  )
}

export default App
