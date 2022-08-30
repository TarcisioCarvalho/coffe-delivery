import React from "react";

interface Coffe{
    img?:string,
    nome?:string,
    preco?:number,
    quantidade?:number,
}

interface CoffeContext{
   
        coffesList?:Coffe[];
        addCoffes?:(coffeProduct:Coffe)=> void
}


export const CoffeContext = React.createContext({} as CoffeContext);

export const CoffeContextProvider = ({children}:any)=>{

    const [coffesList,setCoffes] = React.useState([{img :'',nome:'',preco:0,quantidade:0}] as Coffe[]);

    function addCoffes (coffeProduct:Coffe){
            setCoffes((state)=>{
                state.map(coffe => {
                    if(coffeProduct.nome===coffe.nome)
                    {
                        const quantity = coffe.quantidade! + 1;
                        return {...coffe,quantidade:quantity}
                    }
                })
                return [...state,coffeProduct]
            })
       /*  setCoffes((state)=> {
            const image = img;
            const nomeTemp = nome;
            const precoTemp = preco;
            const novaQuantidade = state.quantidade!+1;
            return {...state, quantidade:novaQuantidade}
        }) */
    }

    return  <CoffeContext.Provider value={{coffesList,addCoffes}}>
                     {children}
            </CoffeContext.Provider>
}