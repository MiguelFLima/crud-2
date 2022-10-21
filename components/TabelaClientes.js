import { useEffect, useState } from "react";
import Cliente from "./Cliente";


function TabelaClientes() {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const clientes = JSON.parse(localStorage.getItem('clientes'))
            setClientes(clientes) 
        }    
    }, [])


  return (
    <div className="lg:w-[900px] w-[350px] md:h-[680px] h-[500px] mx-auto mt-[-5px] bg-white">
        {clientes.map(({nome, email}) => (
            <Cliente
                setClientes={setClientes}
                clientes={clientes}
                key={nome}
                nome={nome}
                email={email}
            />
        ))}
    </div>
  )
}

export default TabelaClientes;


