import Link from "next/link";

function RelacaoClientes() {
  return (
    <div className="bg-white w-[350px] md:w-[700px] flex-col md:flex-row lg:w-[900px] h-[60px] mx-auto mt-16 py-10  rounded-lg flex items-center justify-between ">
      <div className="flex md:space-x-52 w-[100%] space-x-14 border-b-2">
        <h2 className="text-2xl mt-[-15px] md:mt-0 font-bold px-8 lg:px-8 text-gray-500">Nome</h2>
        <h2 className="text-2xl mt-[-15px] md:mt-0 font-bold lg:px-8 text-gray-500">Email</h2>
      </div>
      <button className="text-2xl absolute md:relative text-white bottom-28 md:bottom-0 bg-black md:bg-transparent py-3 md:py-0 px-5 md:px-0 rounded-full md:rounded-none md:text-blue-600 text-right whitespace-nowrap">
        <Link href="/">
          <a className='px-4' >Novo Cliente</a>
        </Link>
      </button>  
    </div>
  );
}

export default RelacaoClientes;
