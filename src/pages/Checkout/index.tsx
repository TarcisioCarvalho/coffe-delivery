import { MapPin } from 'phosphor-react'
import React from 'react'
import { CardOrder } from './Components/CardOrder'
import { CardOrderContainer } from './Components/CardOrder/styles'
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
            
        
    </CheckOutContainer>
  )
}
