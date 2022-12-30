import Casas from "./Casas"
import Spinner from "./Spinner"
import { useState, useEffect } from 'react'

const ListaCasas = ({casas, setLista, setMapa, setAcerca}) => {

    const [spinner, setSpinner] = useState(true)
    // console.log(casas);

    const casasArray = Object.entries(casas)
    // casasArray.map( casas => {
    //     console.log(casas[1][0].id);
    // })

    useEffect(() => {
      setTimeout(() => {
        setSpinner(false)
      }, 3000);
    }, [spinner])
    

  return (
    <> 
        {spinner ? (
            <div className="md:h-[85vh] flex justify-center items-center">
                <Spinner />
            </div>
        ) : (
            <div className="my-20 mx-20">
                {casasArray.map( (casas, i) => (
                    <section key={i} className="">
                        <div className="">
                            <h2 className="font-bold text-3xl border-b-2 border-gray-400">{casas[0]}</h2>
                            <Casas 
                                casa={casas[1]}
                                setMapa={setMapa}
                                setLista={setLista}
                                setAcerca={setAcerca}
                            />
                        </div>
                    </section>
                ))}
            </div>
        )}
    </>
  )
}

export default ListaCasas