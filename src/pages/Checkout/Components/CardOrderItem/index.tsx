
import CoffeImg from '../../../../assets/img/coffe.svg';
import React from 'react'
import { Minus, Plus, Trash } from 'phosphor-react';
import { CardOrderItemContainer } from './styles';
import { CoffeContext } from '../../../../contexts/CoffeContext';

interface CardOrderItemProps{
  imagem:string |undefined;
  nome:string|undefined;
  quantidade:number|undefined;
  preco:number|undefined;
}

export const CardOrderItem = ({imagem,nome,quantidade,preco}:CardOrderItemProps) => {

  const {coffesList,addCoffes, removeCoffes} = React.useContext(CoffeContext);

  return (
    <CardOrderItemContainer>
                <img src={imagem} alt="" />
                <div>
                    <h2>{nome}</h2>
                        <div className='addOrRemoveItens'>
                            <div>
                                <button onClick={()=> removeCoffes!(nome!)}><Minus size={14}/></button>
                                <span>{quantidade}</span>
                                <button onClick={()=> addCoffes!(
                    {img:imagem,
                     nome:nome,
                     preco:preco,
                    })}><Plus size={14}/></button>
                            </div>

                            <button className='buttonRemover'><span><Trash size={14}/></span> Remover </button>
                        </div>
                </div>
                <span className='price'>R$ {preco}</span>
    </CardOrderItemContainer>
  )
}
