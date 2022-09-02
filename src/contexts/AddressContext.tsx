import React from 'react'

interface Endereco{
  rua:string;
  cidade:string;
  uf:string;
  bairro:string;
}

interface AddressContext{
  endereco:Endereco|undefined;
  cep:string|undefined;
  updateCep:(cep:string)=>void;
}

export const AddressContext = React.createContext({} as AddressContext);

export const AddressContextProvider = ({children}:any) => {

  const [cep,setCep] = React.useState<string>();   
  const [endereco,setEndereco] = React.useState<Endereco>(); 

  function updateCep(cep:string){
    setCep(cep);
  }

  async function searchCep(){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const JSON = await response.json();
    console.log(JSON);
    setEndereco(
      {
        bairro:JSON.bairro,
        cidade:JSON.localidade,
        rua:JSON.logradouro,
        uf:JSON.uf
      })
  }

  React.useEffect(()=>{
    if(cep?.length===8) {
      searchCep()
    };
  },[cep])



  return (
    <AddressContext.Provider value={{cep,updateCep,endereco}}>
        {children}
    </AddressContext.Provider>
  )
}
