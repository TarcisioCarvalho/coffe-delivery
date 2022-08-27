import React from 'react'
import { CardOrderItem } from '../CardOrderItem'
import { CardOrderContainer } from './styles'

export const CardOrder = () => {
  return (
    <CardOrderContainer>
        <CardOrderItem/>
        <CardOrderItem/>
        <CardOrderItem/>
        <CardOrderItem/>
        <CardOrderItem/>
        <div className='prices'>
            <div><span>Total de itens</span><span>R$ 29,90</span></div>
            <div><span>Entrega </span><span>3,50 R$</span></div>

            <div><span>Total</span><span>33.50 R$</span></div>
        </div>
        <button className='buttonOrder'>Confirmar Pedido</button>
    </CardOrderContainer>
  )
}
