
import CoffeImg from '../../../../assets/img/coffe.svg';
import React from 'react'
import { Minus, Plus, Trash } from 'phosphor-react';
import { CardOrderItemContainer } from './styles';

export const CardOrderItem = () => {
  return (
    <CardOrderItemContainer>
                <img src={CoffeImg} alt="" />
                <div>
                    <h2>Expresso Tradicional</h2>
                    <div>
                        <button><Minus size={14}/></button>
                        <span>5</span>
                        <button><Plus size={14}/></button>
                    </div>
                    <button><span><Trash size={14}/></span> Remover </button>
                </div>
                <span className='price'>R$ 9,99</span>
    </CardOrderItemContainer>
  )
}
