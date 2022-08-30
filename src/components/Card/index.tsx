import React from 'react'
import { CardContainer } from './styles'
//import coffeExpresso from '../../assets/img/coffee-expresso.jpg';
import coffeExpresso from '../../assets/img/coffe.svg';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import cubano from '../../assets/img/coffes/Cubano.svg';


interface CardProps{
    img:  string ;
    nome:  string;
    descricao: string;
    categorias: string[];
    preco: number;
}


export const Card = ({img,nome,descricao,categorias,preco}:CardProps) => {

    
  return (
    <CardContainer>
        <img src={img} alt="" />
        <div className='divCategorias'>
             {categorias.map(categoria => <h3>{categoria}</h3>)}
        </div>
        <h2>{nome}</h2>
        <p>{descricao} </p>
        <div>
            <span>
                R$ <span>{preco}</span>
            </span>
            <div>
                <button><Minus size={14}/></button>
                <span>5</span>
                <button><Plus size={14}/></button>
            </div>
            <NavLink to='Checkout' className='buttonCart'>
               <ShoppingCartSimple size={22}/> 
            </NavLink>
        </div>
    </CardContainer>
  )
}
