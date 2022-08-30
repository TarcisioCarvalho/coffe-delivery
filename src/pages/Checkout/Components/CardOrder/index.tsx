import React from 'react'
import { CoffeContext } from '../../../../contexts/CoffeContext';
import { CardOrderItem } from '../CardOrderItem'
import { CardOrderContainer } from './styles'

export const CardOrder = () => {

  const {coffesList,addCoffes, removeCoffes} = React.useContext(CoffeContext);

  return (
    <CardOrderContainer>
      {coffesList?.map(coffe => <CardOrderItem imagem={coffe.img} nome={coffe.nome} quantidade ={coffe.quantidade} preco = {coffe.preco} />)}
    
       
    </CardOrderContainer>
  )
}
