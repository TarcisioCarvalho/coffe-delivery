import React from 'react'
import { CoffeContext } from '../../../../contexts/CoffeContext';
import { PricesContainer } from './styles'

export const Prices = () => {

  const {coffesList} = React.useContext(CoffeContext);
  const totalValue = coffesList?.reduce((previusValue,currentValue)=>{
    return (previusValue += (currentValue.quantidade!*currentValue.preco!))
  },0)
  
  return (
<PricesContainer className='prices'>

    <div><span>Total de itens</span><span>R$ {totalValue?.toFixed(2)}</span></div>
    <div><span>Entrega </span><span>3,50 R$</span></div>

    <div><span>Total</span><span>{(totalValue! + 3.5).toFixed(2)} R$</span></div>

    <button className='buttonOrder'>Confirmar Pedido</button>
   
</PricesContainer>
  )
}
