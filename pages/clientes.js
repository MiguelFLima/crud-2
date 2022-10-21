import Header from "../components/Header";
import RelacaoClientes from "../components/RelacaoClientes";
import TabelaClientes from '../components/TabelaClientes';


function Clientes() {
  return (
    <div className="bg-[#d6eaff] h-screen">
        <Header />

        <RelacaoClientes />
        <TabelaClientes />

    </div>
  )
}

export default Clientes;
