import React from 'react'
import { CardContainer } from './styles'
//import coffeExpresso from '../../assets/img/coffee-expresso.jpg';
import coffeExpresso from '../../assets/img/coffe.svg';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';



export const Card = () => {
  return (
    <CardContainer>
        <img src={coffeExpresso} alt="Café Expresso" />
        <h3>Categoria</h3>
        <h2>Nome do Café</h2>
        <p>Descrição do Café seus ingredientes e como é feito </p>
        <div>
            <span>
                R$ <span>9,90</span>
            </span>
            <div>
                <button><Minus size={14}/></button>
                <span>5</span>
                <button><Plus size={14}/></button>
            </div>
            <button className='buttonCart'>
                <ShoppingCartSimple size={22}/>
            </button>
        </div>
    </CardContainer>
  )
}
