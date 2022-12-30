import Casa from "./Casa"

const Casas = ({casa, setLista, setMapa, setAcerca}) => {
    // console.log(casa);
  return (
    <>
        {casa.map((casa, i) => (
            <Casa 
                key={i}
                casa={casa}
                setMapa={setMapa}
                setLista={setLista}
                setAcerca={setAcerca}
            />
        ))}
        
    </>
  )
}

export default Casas