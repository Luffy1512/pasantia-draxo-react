import imgMapa from '../image/mapa.svg'
import listacasas from '../image/listacasas.svg'
import acercade from '../image/acercade.svg'

const Navegacion = ({mapa, setMapa, lista, setLista, acerca, setAcerca}) => {

    function handleMapa() {
        // console.log('Mapa....');
        setMapa(true)
        setLista(false)
        setAcerca(false)
    }
    function handleListaCasas() {
        // console.log('Lista Casas....');
        setLista(true)
        setMapa(false)
        setAcerca(false)
    }
    function handleAcercaDe() {
        // console.log('Acerca de....');
        setAcerca(true)
        setMapa(false)
        setLista(false)
    }

  return (
    <nav className="md:w-1/4 md:bg-black md:h-[100vh] mt-8 md:mt-0">
        <li className='md:px-6 md:py-32 flex justify-center md:flex-col'>
            <div className={`after:block md:after:h-[60px] after:h-[2px] after:w-[100px] md:after:w-[2px] md:after:ml-[1.65rem] after:ml-14 after:mt-[-1.8rem] ${mapa ? 'after:bg-[#927BEF]' : 'after:bg-stone-800'}`}>
                <button  
                    className="flex md:gap-4"
                    onClick={handleMapa}
                >
                    <div className={`rounded-full p-1 ${mapa ? 'bg-[#927BEF]' : 'bg-stone-800' }`}>
                        <img src={imgMapa} alt="icono mapa" />
                    </div>
                    <div className='hidden md:block my-auto'>
                        <p className={`${mapa ? 'text-[#927BEF]' : 'text-white'}  font-bold text-xl`}>Ver Mapa</p>
                    </div>
                </button>
            </div>
            
            <div className={`after:block md:after:h-[60px] after:h-[2px] after:w-[100px] md:after:w-[2px] md:after:ml-[1.65rem] after:ml-14 after:mt-[-1.8rem] ${lista ? 'after:bg-[#927BEF]' : 'after:bg-stone-800'}`}>
                <button  
                    className="flex md:gap-4 "
                    onClick={handleListaCasas}
                >
                    <div className={`rounded-full p-1 ${lista ? 'bg-[#927BEF]' : 'bg-stone-800' }`}>
                        <img src={listacasas} alt="icono lista" />
                    </div>
                    <div className='hidden md:block my-auto'>
                        <p className={`${lista ? 'text-[#927BEF]' : 'text-white'}  font-bold text-xl`}>Lista de Casas</p>
                    </div>
                </button>
            </div>
            
            <div>
                <button  
                    className="flex md:gap-4 "
                    onClick={handleAcercaDe}
                >
                    <div className={`rounded-full p-1 ${acerca ? 'bg-[#927BEF]' : 'bg-stone-800' }`}>
                        <img src={acercade} alt="icono acerca" />
                    </div>
                    <div className='hidden md:block my-auto'>
                        <p className={`${acerca ? 'text-[#927BEF]' : 'text-white'}  font-bold text-xl`}>Acerca de</p>
                    </div>
                </button>
            </div>
        </li>
    </nav>
  )
}

export default Navegacion