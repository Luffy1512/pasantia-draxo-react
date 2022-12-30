const Casa = ({casa, setLista, setMapa, setAcerca}) => {
    // console.log(casa);
    const {number, building_start_date, building_end_date, address, url, name} = casa

    function handleMapa() {
        // console.log('Mapa....');
        setMapa(true)
        setLista(false)
        setAcerca(false)
    }
  return (
    <div className='flex justify-evenly items-center py-5'>
        <div className="w-2/12">
            <img className='w-full' src={url} alt="Imagen Casa San Francisco" />
        </div>
        <div className="w-8/12">
            <h3 className='font-bold text-gray-600'>No. {number}, {name} {building_start_date}-{building_end_date}</h3>
            <p>{address}</p>
        </div>
        <button 
            className="w-1/12 font-bold underline text-xl"
            onClick={handleMapa}
        >
            Ver
        </button>
    </div>
  )
}

export default Casa