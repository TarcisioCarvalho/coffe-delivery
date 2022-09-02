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
        removeCoffes?:(coffeName:string) => void
        removeCoffeToList?:(coffeName:string)=> void
        removeAllCoffes?:()=> void;
}


export const CoffeContext = React.createContext({} as CoffeContext);

export const CoffeContextProvider = ({children}:any)=>{

    const [coffesList,setCoffes] = React.useState([] as Coffe[]);

    function removeAllCoffes(){
        setCoffes([]);
    }

    function removeCoffeToList(coffeName:string){
        setCoffes((state)=>{
            const newList = state.filter(coffe => coffe.nome!==coffeName)
            return newList;
        })
    }

    function removeCoffes(coffeName:string){
        setCoffes((state) =>{
            const newList = state.map(coffe =>{
                if(coffe.nome === coffeName && coffe.quantidade!>0) {
                    const novaQuantidade = coffe.quantidade! - 1;
                    return {...coffe,quantidade:novaQuantidade}
                }
                return{...coffe}
            })
            return [...newList];
        }

        );
    }

    function addCoffes (coffeProduct:Coffe){
        let flag = false;
            setCoffes((state)=>{
              const newList =  state.map(coffe => {
                
                    if(coffeProduct.nome===coffe.nome)
                    {
                        console.log("Entrei aki");
                        flag=true;
                        const quantity = coffe.quantidade===null?0:coffe.quantidade! + 1;
                        return {...coffe,quantidade:quantity}
                    }

                    return {...coffe}
                })
                if(flag) return [...newList]
                flag=false;
                return[...state,{...coffeProduct,quantidade:1}]
            })
       /*  setCoffes((state)=> {
            const image = img;
            const nomeTemp = nome;
            const precoTemp = preco;
            const novaQuantidade = state.quantidade!+1;
            return {...state, quantidade:novaQuantidade}
        }) */
    }

    return  <CoffeContext.Provider
     value={{coffesList,addCoffes,removeCoffes,removeCoffeToList,removeAllCoffes}}>
                     {children}
            </CoffeContext.Provider>
}