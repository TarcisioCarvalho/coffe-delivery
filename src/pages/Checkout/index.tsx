import { MapPin } from 'phosphor-react'
import React from 'react'
import { CardOrder } from './Components/CardOrder'
import { CardOrderContainer } from './Components/CardOrder/styles'
import { PaymentCard } from './Components/PaymentCard'
import { CheckOutContainer, FormContainer, InputContainer } from './styles'

export const Checkout = () => {
  return (
    <CheckOutContainer>
        <FormContainer>
            <div>
                
                <h2><span><MapPin/></span>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <InputContainer />
        </FormContainer>
        <CardOrder/>
        <PaymentCard/>

        <div className='prices'>

            <div><span>Total de itens</span><span>R$ 29,90</span></div>
            <div><span>Entrega </span><span>3,50 R$</span></div>

            <div><span>Total</span><span>33.50 R$</span></div>

            <button className='buttonOrder'>Confirmar Pedido</button>
        </div>
        
            
        
    </CheckOutContainer>
  )
}
