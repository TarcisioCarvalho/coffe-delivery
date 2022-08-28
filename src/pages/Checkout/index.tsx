import { MapPin } from 'phosphor-react'
import React from 'react'
import { CardOrder } from './Components/CardOrder'
import { CardOrderContainer } from './Components/CardOrder/styles'
import { Form } from './Components/Form'
import { PaymentCard } from './Components/PaymentCard'
import { Prices } from './Components/Prices'
import { CheckOutContainer } from './styles'

export const Checkout = () => {
  return (
    <CheckOutContainer>
        <div className='formAndCardOrder'>
            <Form/>
            <CardOrder/>
        </div>
        <div className='paymentCardAndPrices'>
        <PaymentCard/>
        <Prices/>
        </div>
      
    </CheckOutContainer>
  )
}
