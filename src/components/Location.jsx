import Position from "./Position";

const Location = ({casas}) => {
    // console.log(casas);
  return (
    <>
        {casas.map((casa, i) => (
            <Position 
                key={i}
                casa={casa}
            />
        ))}
        
    </>
  )
}

export default Location