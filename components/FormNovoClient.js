import { useState } from "react";

function FormNovoClient() {
  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
  });

  function handleChange(e) {
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    setCliente({ ...cliente, [fieldName]: fieldValue });
  }

  const handleNewClient = (e) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      // Criando array de clientes
      let clientes = new Array();

      // verificando e pegando se existir algum cliente no localstorage
      if (localStorage.hasOwnProperty("clientes")) {
        clientes = JSON.parse(localStorage.getItem("clientes"));
      }

      // incluindo o cliente atual no array
      clientes.push(cliente);

      // setando no localstorage oarray atualizado
      localStorage.setItem("clientes", JSON.stringify(clientes));

      // Limpando o form
      setCliente({
        nome: "",
        email: "",
      });

      alert('Usuário cadastrado com sucesso!')
    }
  };

  return (
    <div className="flex items-center justify-center w-[60%] mx-auto md:w-[100%]">
      <div className=" bg-white  w-[664px] h-[330px] py-7 px-5 rounded-2xl">
        {/* Form */}
        <form
          className="flex flex-col justify-center space-y-8"
          action="submit"
          onSubmit={handleNewClient}
        >
          <h1 className="text-3xl font-semibold">Novo Cliente</h1>
          <input
            className="inputNovoCadastro"
            required
            value={cliente.nome}
            name="nome"
            onChange={handleChange}
            placeholder="Nome"
            type="text"
          />
          <input
            className="inputNovoCadastro"
            required
            value={cliente.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
            type="text"
          />

          {/* Button */}
          <div className="flex items-center justify-center h-[100%] w-[100%]">
            <button className="btnNovoCadastro">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormNovoClient;
