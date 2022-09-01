import React from 'react';
import { CoffeContext } from '../../../../contexts/CoffeContext';
import { CardOrderItem } from '../CardOrderItem';
import { CardOrderContainer } from './styles';
import logo from '../../../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

export const CardOrder = () => {

  const {coffesList,addCoffes, removeCoffes} = React.useContext(CoffeContext);
  const coffeListProducts = coffesList?.map(coffe => <CardOrderItem key={coffe.nome} imagem={coffe.img} nome={coffe.nome} quantidade ={coffe.quantidade} preco = {coffe.preco} />);
  const teste = 'Teste';
  return (
    <CardOrderContainer>
      {coffeListProducts?.length !==0? coffeListProducts:  <NavLink className='noProducts' to='/'>
            <img src={logo} alt="" />
        </NavLink>}
    
       
    </CardOrderContainer>
  )
}
