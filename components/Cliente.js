import { TrashIcon }from '@heroicons/react/outline';


function Cliente({ nome, email, clientes, setClientes }) {

    const DeleteClient = (email) => {
      const newClients = clientes.filter(cliente => cliente.email !== email)
      localStorage.setItem('clientes', JSON.stringify(newClients))
      setClientes(newClients)
      console.log(newClients)
    }
  

  return (
    <div email={email} className="w-[100%] flex ">
      <p className="text-[14px] items-center md:text-xl border-b-2 mb-1  pl-8 w-[120px] md:w-[205px]">
        {nome}
      </p>
      <p className="text-[14px] md:text-xl w-[220px] md:w-[350px] border-b-2 mb-1 pl-[70px] lg:pl-[100px]">
        {email}
      </p>
      <button className='text-white bg-blue-600 px-3 py-[2px] my-[2px] mt-0 ml-6 hidden lg:inline-flex hover:bg-blue-700 active:scale-95 transition duration-100 rounded-md'>Editar</button>
      <TrashIcon onClick={() => DeleteClient(email)} className="hidden lg:inline-flex h-6 bg-red-300 cursor-pointer ml-5 rounded-sm hover:bg-red-500 transition duration-150 active:scale-95" />
    </div>
  );
}

export default Cliente;
