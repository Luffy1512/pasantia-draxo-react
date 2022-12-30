import AcercaDeMi from "./AcercaDeMi"
import ListaCasas from "./ListaCasas"
import Mapa from "./Mapa"

const Main = ({mapa, lista, acerca, casas, setLista, setMapa, setAcerca}) => {

  return (
    <main className="md:w-3/4 mt-6 md:mt-0">
        <div className='py-4 block md:hidden text-center'>
            <h1 className='font-bold text-3xl'>Mapa</h1>
            <p className='italic text-gray-400'>Lista de casas en San Francisco</p>
        </div>
        <div className="md:h-screen md:overflow-y-scroll">
            {mapa && <Mapa casas={casas}/>}
            {lista && <ListaCasas 
                        casas={casas}
                        setMapa={setMapa}
                        setLista={setLista}
                        setAcerca={setAcerca}
                      />}
            {acerca && <AcercaDeMi />}
        </div>
    </main>
  )
}

export default Main