import logoDraxo from '../image/logo.svg'

const Header = ({mapa, lista}) => {
    let Titulo;
    if (mapa) {
        Titulo = 'Mapa'
    } else if(lista) {
        Titulo = 'Lista de Casas'
    } else {
        Titulo = 'Acerca de Mi'
    }
  return (
    <header className='flex container mx-auto'>
        <div className='md:w-1/4 mx-auto'>
            <img className='w-4/5 mx-auto ' src={logoDraxo} alt="Logotipo" />
        </div>
        <div className='md:w-3/4 py-4 px-8 hidden md:block'>
            <h1 className='font-bold text-3xl'>{Titulo}</h1>
            <p className='italic text-gray-400'>Lista de casas en San Francisco</p>
        </div>
    </header>
  )
}

export default Header