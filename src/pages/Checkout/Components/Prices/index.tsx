import React from 'react'
import { PricesContainer } from './styles'

export const Prices = () => {
  return (
<PricesContainer className='prices'>

    <div><span>Total de itens</span><span>R$ 29,90</span></div>
    <div><span>Entrega </span><span>3,50 R$</span></div>

    <div><span>Total</span><span>33.50 R$</span></div>

    <button className='buttonOrder'>Confirmar Pedido</button>
    <div className='branca'>

    </div>
</PricesContainer>
  )
}
